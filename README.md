# EcoTrack - Challenge CCR Motiva

Bem-vindo ao repositório do **EcoTrack**, uma solução tecnológica desenvolvida para auxiliar a Motiva no monitoramento e gerenciamento inteligente da vegetação presente ao longo das rodovias sob sua concessão.

O projeto foi desenvolvido como parte do Challenge CCR Motiva do curso de Ciência da Computação da FIAP, com o objetivo de aplicar conceitos de desenvolvimento mobile, estruturação de dados, persistência local, visão computacional e apoio à tomada de decisão baseada em dados.

---

# Integrantes

- Arthur Reis Batista da Silva - RM 562181
- Carolina Monteiro Bernardo - RM 564651
- Isabelle Dias Belini - RM 566464
- Júlia Souza Marques - RM 565010
- Leonardo de Magalhães Piassa - RM 563663
- Manoella dos Santos Ginez - RM 564469

---

# O Problema

A manutenção da vegetação nas rodovias administradas pela Motiva depende atualmente de inspeções presenciais e cronogramas periódicos de roçada.

Embora esse modelo funcione, ele apresenta limitações importantes:

- Dependência de inspeções humanas;
- Falta de dados atualizados em tempo real;
- Dificuldade na identificação dos trechos mais críticos;
- Custos operacionais elevados;
- Possibilidade de intervenções desnecessárias ou tardias;
- Riscos relacionados à segurança viária e à visibilidade da sinalização.

Dessa forma, existe a necessidade de uma solução capaz de monitorar os trechos de forma mais inteligente, permitindo que as equipes atuem de maneira mais eficiente, estratégica e baseada em dados.

---

# Persona

### Operador de Campo (João Silva)

Responsável por dirigir a frota e realizar a poda juntamente com sua equipe.

Necessita de uma ferramenta simples, intuitiva e eficiente, capaz de funcionar mesmo em ambientes com baixa conectividade, permitindo acesso rápido às informações necessárias para execução da operação.

---

# Requisitos Funcionais (RF)

- **RF01:** O sistema deve mapear automaticamente trechos de rodovia através de visão computacional.
- **RF02:** O aplicativo deve permitir o controle de ligar/desligar o sistema de escaneamento acoplado ao veículo.
- **RF03:** O sistema deve gerar e notificar Ordens de Serviço (OS) prioritárias baseadas na criticidade da vegetação.
- **RF04:** O operador deve conseguir registrar evidências da conclusão da poda.
- **RF05:** O operador deve possuir acesso a um assistente virtual para esclarecimento de dúvidas operacionais.

---

# Requisitos Não Funcionais (RNF)

- **RNF01 – Modo Offline:** Permitir armazenamento local dos dados para utilização em locais sem cobertura de rede.
- **RNF02 – Usabilidade em Campo:** Interface com alto contraste e componentes adequados para utilização em ambientes externos.
- **RNF03 – Performance:** Garantir boa experiência de uso mesmo em dispositivos móveis intermediários.

---

# Restrições Técnicas

- As rodovias apresentam áreas com baixa conectividade.
- O hardware embarcado deve suportar condições adversas de operação.
- A solução deve respeitar as normas vigentes da ARTESP e ANTT relacionadas à manutenção da vegetação.

---

# A Solução e Integração de Hardware (App & Visão Computacional)

O EcoTrack integra um aplicativo mobile com um sistema de visão computacional embarcado em veículos operacionais.

## Componentes da Solução

### Hardware Embarcado

Dispositivo com câmeras instalado nos veículos da frota responsável pela captura das imagens da vegetação.

### Aplicativo Mobile

Centraliza todas as informações operacionais, permitindo:

- Ativação do monitoramento;
- Visualização do mapeamento;
- Recebimento de avisos;
- Consulta de informações operacionais;
- Comunicação com assistentes virtuais.

### Camada Inteligente

Responsável por analisar os dados coletados e gerar recomendações para as equipes de campo.

---

# Descrição do Projeto

O EcoTrack foi desenvolvido em React Native utilizando Expo Router e possui como objetivo simular o funcionamento completo da solução através de dados mockados.

A aplicação permite que operadores visualizem informações operacionais, acompanhem o monitoramento da vegetação, consultem análises inteligentes e recebam recomendações para atuação nos trechos sob sua responsabilidade.

Toda a lógica da Sprint 2 foi construída utilizando Context API e AsyncStorage, simulando o comportamento futuro do sistema quando integrado aos equipamentos embarcados e APIs externas.

---

# Funcionalidades Implementadas

## Autenticação

- Cadastro de usuários;
- Login;
- Logout;
- Persistência de sessão;
- Alteração de senha.

## Tela Inicial

- Informações da equipe;
- Ordem de serviço;
- Trecho atual;
- Acesso rápido às funcionalidades principais.

## Monitoramento

- Ativação do monitoramento;
- Simulação da visão computacional;
- Exibição de vídeo simulando captura do veículo;
- Status operacional.

## Mapeamento

- Visualização do trecho atribuído à equipe;
- Mapa de calor;
- Classificação automática dos pontos monitorados:
  - 🟢 Vegetação abaixo de 10 cm
  - 🟡 Vegetação entre 10 cm e 30 cm
  - 🔴 Vegetação acima de 30 cm
- Recomendações operacionais geradas pela IA.

## Avisos

- Visualização de avisos operacionais;
- Geração automática de notificações;
- Atualização dinâmica dos dados.

## Assistente de Dúvidas

- Chat operacional;
- Respostas automáticas simuladas.

## Assistente de Cancelamento

- Registro de impedimentos operacionais;
- Comunicação de problemas de execução;
- Geração automática de avisos.

## Perfil

- Dados do operador;
- Alteração de senha;
- Informações pessoais;
- Área de suporte.

---

# Descrição dos Mocks Utilizados

Para esta Sprint foi criada uma camada de dados mockados utilizando Context API.

O objetivo é simular o comportamento futuro da aplicação sem depender de APIs externas.

## Mock de Usuário

Simula:

- Operador logado;
- Equipe responsável;
- Ordem de serviço;
- Horário de atuação;
- Trecho atual.

## Mock de Mapeamento

Simula:

- Trecho monitorado;
- Pontos da rodovia;
- Altura da vegetação;
- Status dos trechos;
- Mapa de calor.

## Mock de Monitoramento

Simula:

- Ativação da visão computacional;
- Status operacional;
- Dados provenientes do veículo.

## Mock de Avisos

Simula:

- Alertas operacionais;
- Notificações geradas automaticamente;
- Histórico de avisos.

## Mock de Chats

Simula:

- Conversas com os assistentes;
- Respostas automáticas;
- Registro de cancelamentos;
- Fluxos de suporte.

## Exemplos de Fluxos Simulados

### Monitoramento

Usuário ativa o monitoramento

↓

Status é atualizado

↓

Novo aviso é criado

↓

Tela de avisos é atualizada automaticamente

### Cancelamento

Usuário registra um impedimento

↓

Assistente processa a informação

↓

Resposta automática é gerada

↓

Novo aviso operacional é criado

---

# Protótipo Mobile (Figma)

https://www.figma.com/design/TT7nBNLKKnz3fK0f7vxFFX/SPRINT_CROSS-PLATFORM?node-id=0-1&t=ZFpQWhvOqdRo8JIx-1

---

# Tecnologias Utilizadas

## Mobile

- React Native
- Expo
- Expo Router

## Gerenciamento de Estado

- Context API

## Persistência Local

- AsyncStorage

## Interface

- Expo Vector Icons
- React Native StyleSheet

---

# Estrutura do Projeto

```text
app/
├── (auth)
│   ├── start.js
│   ├── login.js
│   └── register.js
│
├── (main)
│   ├── index.js
│   ├── monitoramento.js
│   ├── mapa.js
│   ├── avisos.js
│   ├── duvidas.js
│   ├── cancelamento.js
│   ├── perfil.js
│   ├── sobre-mim.js
│   ├── trocar-senha.js
│   └── suporte.js
│
components/
│
context/
│   ├── AuthContext.js
│   └── MockDataContext.js
│
data/
│
assets/
```

---

# Como Rodar o Projeto

Siga as instruções abaixo para configurar o ambiente e executar o projeto em sua máquina.

## Pré-requisitos

Antes de começar, certifique-se de possuir instalado:

- Node.js (versão 18 ou superior)
- npm
- Git
- Expo Go (Android ou iOS)

## Clonar o Repositório

```bash
git clone https://github.com/jumarques03/sprint02-cpad
```

## Acessar a Pasta do Projeto

```bash
cd sprint02-cpad
```

## Instalar Dependências

```bash
npm install
```

## Executar o Projeto

```bash
npx expo start
```

## Abrir o Aplicativo

- Escaneie o QR Code utilizando o Expo Go no celular.
- Ou execute em um emulador Android/iOS.

---

# Observação sobre Recursos Nativos

Nesta Sprint, os recursos de câmera e geolocalização foram simulados através de dados mockados (imagem e vídeo).

Essa decisão foi tomada porque, no contexto da solução proposta, tanto a captura de imagens quanto a localização são provenientes dos dispositivos embarcados nos veículos operacionais e não diretamente do dispositivo móvel.

Dessa forma, os mocks representam o comportamento esperado da futura integração com os equipamentos reais.

---

*Projeto desenvolvido para o Challenge CCR Motiva – Ciência da Computação FIAP.*