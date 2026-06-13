import { useState, useContext, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
  ImageBackground,
} from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { authContext } from "../../context/AuthContext";
import Input, {CustomInput} from "../../components/Input";
import BlueButton from "../../components/BlueButton";
import BackArrow from "../../components/BackArrow";

export default function Login() {
  const router = useRouter();
  const { usuarios, salvarSessaoUsuario } = useContext(authContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [erros, setErros] = useState({});

  useFocusEffect(
    useCallback(() => {
      setErros({}); 
    }, [])
  );

  const validar = () => {
    const novosErros = {};

    if (!email) {
      novosErros.email = "Campo obrigatório"; 
    } else if (!email.includes("@")) {
      novosErros.email = "Formato de e-mail inválido"; 
    }

    if (!senha) {
      novosErros.senha = "Campo obrigatório"; 
    } else if (senha.length < 6) {
      novosErros.senha = "A senha deve ter no mínimo 6 caracteres"; 
    }

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (!usuarioEncontrado) {
      novosErros.login = "Usuário não encontrado. Verifique as informações ou cadastre-se."; 
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const slideAnim = useRef(new Animated.Value(-300)).current;
  const [message, setMessage] = useState('');
  
  const showAlert = (msg) => {
    setMessage(msg);

    // 2. Configurar a animação de entrada (Slide Down)
    Animated.timing(slideAnim, {
      toValue: 0, // Posição final (aparece)
      duration: 500,
      useNativeDriver: true, // Importante para performance
    }).start(() => {
      // 3. Após 2 segundos, esconder a animação (Slide Up)
      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -100, // Posição inicial (some)
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 3000);
    });
  };

  const handleLogin = async () => {
          const usuarioEncontrado = usuarios.find(
            (u) => u.email === email && u.senha === senha
          );

          if (validar() && usuarioEncontrado) {
            await salvarSessaoUsuario(usuarioEncontrado); 
            
            router.replace("/(main)"); 
          } else {
            startShake();
          }
    };

  return (
      <View style={styles.container}>
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        >
            <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            >
                <BackArrow/>
                <Text style={styles.titulo}>ECOTRACK</Text> 
                <Text style={styles.subtitulo}>Visão autônoma, gestão preditiva</Text> 

                <Text style={styles.login}>Login</Text>
                {erros.login && (
                    <View style={styles.containerErroLogin}>
                    <Text style={styles.erroLoginTexto}>{erros.login}</Text>
                    </View>
                )}
                <Input>
                  <CustomInput
                      label="Email:"
                      placeholder="Insira seu e-mail"
                      value={email}
                      onChangeText={(text) => {
                      setEmail(text);
                      setErros({});
                      }}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      erro={erros.email}
                  />
                  
                  <CustomInput
                      label="Senha:"
                      placeholder="Insira sua senha"
                      value={senha}
                      onChangeText={(text) => {
                      setSenha(text);
                      setErros({});
                      }}
                      secureTextEntry={!senhaVisivel}
                      isPassword={true}
                      senhaVisivel={senhaVisivel}
                      setSenhaVisivel={setSenhaVisivel}
                      erro={erros.senha}
                  />                
                </Input>

                <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
                    <BlueButton title="Entrar" onPress={handleLogin} />
                </Animated.View>
            </ScrollView>
        </KeyboardAvoidingView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#FFFF"
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 30, // espaço para a seta
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#081EAD",
    textAlign: "center",
    marginBottom: 8,
    marginTop: 80,
    fontFamily: 'Black Ops One',
    letterSpacing: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: "#081EAD",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: 'Black Ops One',
  },
  login: {
    fontSize: 18,
    fontWeight:"bold",
    color: "#081EAD",
    textAlign: "start",
    marginBottom: 10,
    fontFamily: 'Black Ops One',
  },
  containerErroLogin: {
    backgroundColor: "rgba(255, 77, 77, 0.1)",
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#FF4D4D",
  },
  erroLoginTexto: {
    color: "#FF4D4D",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  }
});