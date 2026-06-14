import { Slot, useRouter, useSegments } from "expo-router";
import { useContext, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { authContext, AuthProvider } from "../context/AuthContext";
import { MockDataProvider } from "../context/MockDataContext";

function RootNavigator() {
  const { sessao, usuarios } = useContext(authContext);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!usuarios) return;

    const estaNaAuth = segments[0] === "(auth)";

    if (!sessao && !estaNaAuth) {
      router.replace("/(auth)/start");
    } else if (sessao && estaNaAuth) {
      // CORRIGIDO: Redireciona para a raiz da nova Stack principal
      router.replace("/(main)/"); 
    }
  }, [sessao, segments, usuarios]);

  if (usuarios === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#ffffff" }}>
        <ActivityIndicator size="large" color="#081EAD"/>
      </View>
    );
  }

  return <Slot/>;
}

export default function Layout() {
  return (
    <AuthProvider>
      <MockDataProvider>
        <RootNavigator/>
      </MockDataProvider>
    </AuthProvider>
  );
}