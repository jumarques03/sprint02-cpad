export const mockMonitoring = {
  ativo: false,
  cameraStatus: "desligada",
  tempoMonitoramento: "00:32:15",
  video: require("../assets/monitoramento.mp4"),
  deteccoes: [
    {
      id: 1,
      tipo: "Grama alta",
      confianca: 91,
      alturaEstimativaCm: 24,
      status: "amarelo",
    },
  ],
};