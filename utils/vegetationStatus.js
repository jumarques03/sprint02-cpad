export const STATUS_AGUARDANDO = "aguardando_escaneamento";

export const STATUS_INFO = {
  verde: {
    label: "Verde",
    color: "#00C853",
    descricao: "Abaixo de 10 cm",
  },
  amarelo: {
    label: "Amarelo",
    color: "#FFC107",
    descricao: "Entre 10 cm e 30 cm",
  },
  vermelho: {
    label: "Vermelho",
    color: "#FF3B30",
    descricao: "Acima de 30 cm",
  },
  [STATUS_AGUARDANDO]: {
    label: "Aguardando leitura",
    color: "#9A9A9A",
    descricao: "Ponto ainda não escaneado",
  },
};

export function classificarAltura(alturaCm) {
  if (alturaCm < 10) return "verde";
  if (alturaCm <= 30) return "amarelo";
  return "vermelho";
}

export function gerarRecomendacaoIA(status) {
  switch (status) {
    case "verde":
      return "Vegetação dentro do padrão. Nenhuma ação necessária.";
    case "amarelo":
      return "Vegetação em atenção. Recomenda-se agendar poda nos próximos dias.";
    case "vermelho":
      return "Vegetação crítica. Priorizar poda imediata neste ponto.";
    default:
      return null;
  }
}
