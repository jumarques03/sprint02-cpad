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
import Input, {CustomInput, CPFInput, PhoneNumberInput} from "../../components/Input";
import BlueButton from "../../components/BlueButton";
import BackArrow from "../../components/BackArrow";
import SlideAlert from "../../components/SlideAlert";

export default function Register() {
  const router = useRouter();
  const { usuarios, salvarSessaoUsuario, cadastrarUsuario} = useContext(authContext);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [erros, setErros] = useState({});

  useFocusEffect(
    useCallback(() => {
      setErros({}); 
    }, [])
  );

  const tokensExistentes = ["189023", "123456", "789102"]   // MOCKAR ISSO NO ARQUIVO DE DADOS MOCKADOS

  const validar = () => {
    const novosErros = {};

    if (!nome) {
      novosErros.nome = "Campo obrigatório"; 
    }
    if (!sobrenome) {
      novosErros.sobrenome = "Campo obrigatório"; 
    }
    if (!cpf) {
      novosErros.cpf = "Campo obrigatório"; 
    }
    if (!telefone) {
      novosErros.telefone = "Campo obrigatório"; 
    }
    if (!email) {
      novosErros.email = "Campo obrigatório";
    } else if (!email.includes("@motiva.com")) {
      novosErros.email = "E-mail inválido";
    }
    if (!senha) {
      novosErros.senha = "Campo obrigatório"; 
    } else if (senha.length < 6) {
      novosErros.senha = "A senha deve ter no mínimo 6 caracteres"; 
    }
    if (senha !== confirmarSenha) {
      novosErros.confirmarSenha = "As senhas não coincidem";
    } else if (!confirmarSenha) {
        novosErros.confirmarSenha = "Campo obrigatório";
    }
    if (!token) {
      novosErros.token = "Campo obrigatório";
    } else if (token.length < 6) {
      novosErros.token = "O token deve ter 6 caracteres";
    } else if (!tokensExistentes.includes(token)) {
        novosErros.token = "Token inexistente.";
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

  const handleCadastro = async () => {
    if (validar()) {
      const novoUsuario = { nome, sobrenome, cpf, telefone, email, senha};
      const sucesso = await cadastrarUsuario(novoUsuario);

      if (sucesso) {
        showAlert('✅ Cadastro realizado com sucesso!');
        
        setTimeout(() => {
            router.replace("/login");
        }, 3000);

      } else {
        setErros({ email: "Este e-mail já está em uso" });
      }
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
      <SlideAlert slideAnim={slideAnim} message={message} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <BackArrow/>
        <Text style={styles.titulo}>ECOTRACK</Text> 
        <Text style={styles.subtitulo}>Visão autônoma, gestão preditiva</Text> 

        <Text style={styles.rotulo}>Registro</Text>
        {erros.login && (
            <View style={styles.containerErroLogin}>
            <Text style={styles.erroLoginTexto}>{erros.login}</Text>
            </View>
        )}
        <Input>
            <CustomInput
                label="Nome:"
                placeholder="Insira seu primeiro nome"
                value={nome}
                onChangeText={(text) => {
                setNome(text);
                setErros({});
                }}
                keyboardType="default"
                autoCapitalize="none"
                erro={erros.nome}
            />
            <CustomInput
                label="Sobrenome:"
                placeholder="Insira seu sobrenome"
                value={sobrenome}
                onChangeText={(text) => {
                setSobrenome(text);
                setErros({});
                }}
                keyboardType="default"
                autoCapitalize="none"
                erro={erros.sobrenome}
            />
            <CPFInput
                label="CPF:"
                placeholder="Insira seu CPF"
                value={cpf}
                onChangeText={(text) => {
                setCPF(text);
                setErros({});
                }}
                keyboardType="numeric"
                autoCapitalize="none"
                erro={erros.cpf}
            />   
            <PhoneNumberInput
                label="Telefone:"
                placeholder="Insira seu número de telefone"
                value={telefone}
                onChangeText={(text) => {
                setTelefone(text);
                setErros({});
                }}
                keyboardType="numeric"
                autoCapitalize="none"
                erro={erros.telefone}
            />              
        </Input>

        <Text style={styles.rotulo}>Motiva</Text>
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
            <Text style={styles.subrotulo}>Utilize o e-mail corporativo informado pela Motiva para realizar o cadastro.</Text>
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
            <CustomInput
                label="Confirmar senha:"
                placeholder="Insira sua senha novamente"
                value={confirmarSenha}
                onChangeText={(text) => {
                setConfirmarSenha(text);
                setErros({});
                }}
                secureTextEntry={!senhaVisivel}
                isPassword={true}
                senhaVisivel={senhaVisivel}
                setSenhaVisivel={setSenhaVisivel}
                erro={erros.confirmarSenha}
            />
            <CustomInput
                label="Token:"
                placeholder="Ex: 123456"
                value={token}
                onChangeText={(text) => {
                setToken(text);
                setErros({});
                }}
                keyboardType="numeric"
                autoCapitalize="none"
                erro={erros.token}
            />    
            <Text style={styles.subrotulo}>Insira o Token enviado pela motiva para validar a autenticidade da sua conta</Text>            
          </Input>

        <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
            <BlueButton title="Finalizar" onPress={handleCadastro} />
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
    header: {
    height: 90,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
    elevation: 3,
    },

    scrollContainer: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 24,
    paddingBottom: 40,
    },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#081EAD",
    textAlign: "center",
    marginBottom: 8,
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
  rotulo: {
    fontSize: 18,
    fontWeight:"bold",
    color: "#081EAD",
    textAlign: "start",
    marginBottom: 7,
    fontFamily: 'Black Ops One',
    marginTop: 20
  },
  subrotulo: {
    color: "#868181",
    fontSize: 14, 
    marginBottom: 10
  },
  erroLoginTexto: {
    color: "#FF4D4D",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
  }
});