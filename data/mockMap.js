import {
  STATUS_AGUARDANDO,
  classificarAltura,
  gerarRecomendacaoIA,
} from "../utils/vegetationStatus";

const ESPACAMENTO_KM = 0.75;

const ALTURAS_CICLO = [
  5, 12, 33, 8, 19, 6, 25, 38, 4, 15, 9, 28, 7, 20, 34, 11, 3, 17, 24, 6,
];

function arredondar(valor, casas = 4) {
  const fator = 10 ** casas;
  return Math.round(valor * fator) / fator;
}

function interpolarPontos(waypoints, espacamentoKm) {
  const kmInicio = waypoints[0].km;
  const kmFim = waypoints[waypoints.length - 1].km;
  const pontos = [];

  for (let km = kmInicio; km <= kmFim; km += espacamentoKm) {
    let segmento = waypoints[0];
    let proximo = waypoints[1];

    for (let i = 0; i < waypoints.length - 1; i++) {
      if (km >= waypoints[i].km && km <= waypoints[i + 1].km) {
        segmento = waypoints[i];
        proximo = waypoints[i + 1];
        break;
      }
    }

    const extensaoSegmento = proximo.km - segmento.km;
    const fracao = extensaoSegmento === 0 ? 0 : (km - segmento.km) / extensaoSegmento;

    const latitude = segmento.lat + (proximo.lat - segmento.lat) * fracao;
    const longitude = segmento.lng + (proximo.lng - segmento.lng) * fracao;

    pontos.push({
      km: arredondar(km, 1),
      latitude: arredondar(latitude),
      longitude: arredondar(longitude),
    });
  }

  return pontos;
}

function gerarPontosCompletos(trecho, waypoints, offsetCiclo) {
  const coordenadas = interpolarPontos(waypoints, ESPACAMENTO_KM);

  return coordenadas.map((coordenada, indice) => {
    const alturaVegetacao = ALTURAS_CICLO[(indice + offsetCiclo) % ALTURAS_CICLO.length];
    const status = classificarAltura(alturaVegetacao);
    const dataBase = new Date("2026-09-18T05:30:00");
    dataBase.setSeconds(dataBase.getSeconds() + indice * 30);

    return {
      id: `${trecho}-${indice + 1}`,
      trecho,
      km: coordenada.km,
      latitude: coordenada.latitude,
      longitude: coordenada.longitude,
      alturaVegetacao,
      status,
      recomendacaoIA: gerarRecomendacaoIA(status),
      timestamp: dataBase.toISOString(),
    };
  });
}

function gerarPontosParciais(trecho, waypoints, offsetCiclo) {
  const coordenadas = interpolarPontos(waypoints, ESPACAMENTO_KM);

  return coordenadas.map((coordenada, indice) => {
    const escaneado = indice % 5 < 2;

    if (!escaneado) {
      return {
        id: `${trecho}-${indice + 1}`,
        trecho,
        km: coordenada.km,
        latitude: coordenada.latitude,
        longitude: coordenada.longitude,
        alturaVegetacao: null,
        status: STATUS_AGUARDANDO,
        recomendacaoIA: null,
        timestamp: null,
      };
    }

    const alturaVegetacao = ALTURAS_CICLO[(indice + offsetCiclo) % ALTURAS_CICLO.length];
    const status = classificarAltura(alturaVegetacao);
    const dataBase = new Date("2026-09-17T14:00:00");
    dataBase.setSeconds(dataBase.getSeconds() + indice * 30);

    return {
      id: `${trecho}-${indice + 1}`,
      trecho,
      km: coordenada.km,
      latitude: coordenada.latitude,
      longitude: coordenada.longitude,
      alturaVegetacao,
      status,
      recomendacaoIA: gerarRecomendacaoIA(status),
      timestamp: dataBase.toISOString(),
    };
  });
}

const waypointsOeste = [
  { km: 0, lat: -23.49, lng: -46.845 },
  { km: 16, lat: -23.57, lng: -46.825 },
  { km: 32, lat: -23.6489, lng: -46.8523 },
];

const waypointsSul = [
  { km: 32, lat: -23.6489, lng: -46.8523 },
  { km: 45, lat: -23.7166, lng: -46.8489 },
  { km: 60, lat: -23.755, lng: -46.72 },
  { km: 75, lat: -23.6939, lng: -46.565 },
  { km: 85, lat: -23.7147, lng: -46.4131 },
  { km: 93, lat: -23.6678, lng: -46.4614 },
];

const waypointsLeste = [
  { km: 93, lat: -23.6678, lng: -46.4614 },
  { km: 105, lat: -23.61, lng: -46.5 },
  { km: 118, lat: -23.52, lng: -46.48 },
  { km: 128, lat: -23.46, lng: -46.51 },
  { km: 136.5, lat: -23.445, lng: -46.545 },
];

const waypointsNorte = [
  { km: 136.5, lat: -23.445, lng: -46.545 },
  { km: 150, lat: -23.3616, lng: -46.7469 },
  { km: 165, lat: -23.3646, lng: -46.81 },
  { km: 180.5, lat: -23.49, lng: -46.845 },
];

const pontosOeste = gerarPontosCompletos("oeste", waypointsOeste, 0);
const pontosSul = gerarPontosCompletos("sul", waypointsSul, 4);
const pontosLeste = gerarPontosCompletos("leste", waypointsLeste, 9);
const pontosNorte = gerarPontosParciais("norte", waypointsNorte, 13);

export const mockMap = {
  rodovia: "Rodoanel Mário Covas (SP-021)",
  regiaoInicial: {
    latitude: -23.58,
    longitude: -46.63,
    latitudeDelta: 0.62,
    longitudeDelta: 0.62,
  },

  trechos: {
    oeste: {
      id: "oeste",
      nome: "Trecho Oeste",
      kmInicial: 0,
      kmFinal: 32,
      cobertura: "operacional",
      descricao: "São Paulo, Barueri, Carapicuíba, Osasco, Cotia e Embu das Artes.",
      pontos: pontosOeste,
    },
    sul: {
      id: "sul",
      nome: "Trecho Sul",
      kmInicial: 32,
      kmFinal: 93,
      cobertura: "operacional",
      descricao: "Itapecerica da Serra, São Paulo, São Bernardo do Campo e Ribeirão Pires até Mauá.",
      pontos: pontosSul,
    },
    leste: {
      id: "leste",
      nome: "Trecho Leste",
      kmInicial: 93,
      kmFinal: 136.5,
      cobertura: "operacional",
      descricao: "Liga o Trecho Sul à Rodovia Ayrton Senna e à Presidente Dutra, próximo a Guarulhos.",
      pontos: pontosLeste,
    },
    norte: {
      id: "norte",
      nome: "Trecho Norte",
      kmInicial: 136.5,
      kmFinal: 180.5,
      cobertura: "parcial",
      descricao: "Ainda em obras: ligaria a Dutra ao Trecho Oeste, passando perto de Guarulhos e da Fernão Dias.",
      pontos: pontosNorte,
    },
  },
};
