export const mockMap = {
  rodovia: "Rodovia BR111",
  kmAtual: 121,

  trechos: [
    {
      id: 1,
      nome: "Trecho 1",
      kmInicial: 121,
      kmFinal: 125,
      status: "verde",
      alturaGramaCm: 8,
      equipe: "EQUIPE ALPHA 6766",
    },
    {
      id: 2,
      nome: "Trecho 2",
      kmInicial: 126,
      kmFinal: 130,
      status: "amarelo",
      alturaGramaCm: 18,
      equipe: "EQUIPE ALPHA 6766",
    },
    {
      id: 3,
      nome: "Trecho 3",
      kmInicial: 131,
      kmFinal: 138,
      status: "vermelho",
      alturaGramaCm: 32,
      equipe: "EQUIPE GAMA 7367",
    },
  ],

  resumoIA:
    "Equipe Gama 7367 precisa ter atenção para os trechos 1 e 2 do Km 138, pois apresenta cerca de 25 cm em somente uma faixa de especificação.",
};