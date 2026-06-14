import React, { createContext, useContext, useState } from "react";

import { mockUser } from "../data/mockUser";
import { mockMap } from "../data/mockMap";
import { mockMonitoring } from "../data/mockMonitoring";
import { mockChats } from "../data/mockChats";
import { mockNotifications } from "../data/mockNotifications";

const MockDataContext = createContext();

export function MockDataProvider({ children }) {
  const [user, setUser] = useState(mockUser);
  const [mapData, setMapData] = useState(mockMap);
  const [monitoring, setMonitoring] = useState(mockMonitoring);
  const [chats, setChats] = useState(mockChats);
  const [notifications, setNotifications] = useState(mockNotifications);

  const iniciarMonitoramento = () => {
    setMonitoring((prev) => ({
      ...prev,
      ativo: true,
      cameraStatus: "ativa",
      tempoMonitoramento: "00:32:15",
    }));

    adicionarAviso({
      title: "Monitoramento iniciado",
      message: `A visão computacional foi ativada para ${user.equipe}.`,
    });
  };

  const encerrarMonitoramento = () => {
    setMonitoring((prev) => ({
      ...prev,
      ativo: false,
      cameraStatus: "desligada",
      tempoMonitoramento: "00:00:00",
    }));

    adicionarAviso({
      title: "Monitoramento encerrado",
      message: `O monitoramento da ${user.equipe} foi encerrado.`,
    });
  };

  const adicionarAviso = ({ title, message }) => {
    const novoAviso = {
        id: Date.now(),
        title,
        message,
        date: new Date().toLocaleDateString("pt-BR"),
        hour: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        }),
        read: false,
    };

    setNotifications((prev) => [novoAviso, ...prev]);
  };

  const enviarMensagemChat = (tipoChat, textoUsuario) => {
    if (!textoUsuario.trim()) return;

    const horario = new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const mensagemUsuario = {
      id: Date.now(),
      type: "user",
      message: textoUsuario,
      time: horario,
    };

    const respostaBot = {
      id: Date.now() + 1,
      type: "bot",
      message: gerarRespostaMockada(tipoChat, textoUsuario),
      time: horario,
    };

    setChats((prev) => ({
      ...prev,
      [tipoChat]: [
        ...prev[tipoChat],
        mensagemUsuario,
        respostaBot,
      ],
    }));
  };

  const gerarRespostaMockada = (tipoChat, texto) => {
    const textoLower = texto.toLowerCase();

    if (tipoChat === "cancelamento") {
        adicionarAviso({
        title: "Solicitação de cancelamento enviada",
        message: "O motivo informado foi registrado e enviado para análise.",
        });

        return "Cancelamento registrado com sucesso. O status foi enviado para análise da equipe responsável.";
    }

    if (textoLower.includes("monitoramento")) {
        return chats.respostas.monitoramento;
    }

    if (
        textoLower.includes("cancelamento") ||
        textoLower.includes("cancelar")
    ) {
        return chats.respostas.cancelamento;
    }

    if (
        textoLower.includes("mapa") ||
        textoLower.includes("trecho") ||
        textoLower.includes("km")
    ) {
        return chats.respostas.mapa;
    }

    return chats.respostas.default;
  };

  const atualizarStatusTrecho = (trechoId, novoStatus) => {
    setMapData((prev) => ({
      ...prev,
      trechos: prev.trechos.map((trecho) =>
        trecho.id === trechoId
          ? { ...trecho, status: novoStatus }
          : trecho
      ),
    }));
  };

  const value = {
    user,
    mapData,
    monitoring,
    chats,
    notifications,

    setUser,
    setMapData,
    setMonitoring,
    setChats,
    setNotifications,

    iniciarMonitoramento,
    encerrarMonitoramento,
    adicionarAviso,
    enviarMensagemChat,
    atualizarStatusTrecho,
  };

  return (
    <MockDataContext.Provider value={value}>
      {children}
    </MockDataContext.Provider>
  );
}

export function useMockData() {
  const context = useContext(MockDataContext);

  if (!context) {
    throw new Error("useMockData deve ser usado dentro de um MockDataProvider");
  }

  return context;
}