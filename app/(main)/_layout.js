// app/(main)/_layout.js
import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Mantém o comportamento de ocultar o header padrão, se preferir customizado
      }}
    >
      {/* Definindo as telas que farão parte deste fluxo de Stack */}
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen name="mapa" options={{ title: "Mapa" }} />
      <Stack.Screen name="avisos" options={{ title: "Avisos" }} />
      <Stack.Screen name="monitoramento" options={{ title: "Monitoramento" }} />
      <Stack.Screen name="perfil" options={{ title: "Perfil" }} />
    </Stack>
  );
}