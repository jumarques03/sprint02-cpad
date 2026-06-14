export const mockChats = {
  duvidas: [
    {
      id: 1,
      type: "bot",
      message: "Olá! Sou o assistente virtual da EcoTrack. Como posso ajudar?",
      time: new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
      }),
    },
  ],

  cancelamento: [
    {
      id: 1,
      type: "bot",
      message:
        "Olá! Sou o assistente de cancelamento. Informe o motivo do impedimento da operação.",
      time: new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
      }),
    },
  ],

  respostas: {
    monitoramento:
      "Para iniciar o monitoramento, acesse a opção Ativar Monitoramento na tela inicial.",
    cancelamento:
      "Para registrar um cancelamento, informe o motivo e aguarde a validação do status.",
    mapa:
      "O mapa exibe os trechos monitorados, suas cores e o status da vegetação.",
    default:
      "Entendi! Sua solicitação foi registrada no sistema mockado da EcoTrack.",
  },
};