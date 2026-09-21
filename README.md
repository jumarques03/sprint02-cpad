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

- Mapa interativo (`react-native-maps`) cobrindo o Rodoanel Mário Covas completo;
- Filtro por trecho (Todos, Oeste, Sul, Leste, Norte);
- Classificação automática dos pontos monitorados:
  - 🟢 Vegetação abaixo de 10 cm
  - 🟡 Vegetação entre 10 cm e 30 cm
  - 🔴 Vegetação acima de 30 cm
- Detalhe do ponto (km, altura, status e recomendação) ao tocar em um marcador;
- Recomendações operacionais geradas pela IA;
- Simulação de atualização dos pontos, incluindo cenários de trecho vazio e falha de carregamento.

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

O mock cobre o **Rodoanel Mário Covas (SP-021) completo**, dividido nos 4 trechos reais da rodovia:

- **Trecho Oeste** (~32 km) — São Paulo, Barueri, Carapicuíba, Osasco, Cotia e Embu das Artes;
- **Trecho Sul** (~61 km) — do entroncamento com a Régis Bittencourt (Embu das Artes) até a Av. Papa João XXIII em Mauá, passando por Itapecerica da Serra, São Paulo, São Bernardo do Campo e Ribeirão Pires;
- **Trecho Leste** (~43,5 km) — liga o Trecho Sul à Rodovia Ayrton Senna e à Presidente Dutra, próximo ao Aeroporto de Guarulhos;
- **Trecho Norte** (~44 km) — ligaria a Dutra ao Trecho Oeste, passando perto de Guarulhos e da Fernão Dias.

Os pontos são gerados a cada ~750 m ao longo dos quatro trechos (cerca de 243 pontos no total), formando visualmente o traçado da via só com a densidade das bolinhas — sem nenhuma linha desenhada por cima. No mapa nativo, cada ponto é um `Marker` do `react-native-maps` com uma bolinha customizada de tamanho fixo em pixels, para ficar sempre visível na tela independentemente do nível de zoom (diferente de um `Circle`, cujo raio é em metros reais e desaparece quando o mapa é visto de longe). Cada ponto expõe: km, latitude/longitude, altura da vegetação (cm), status (verde/amarelo/vermelho) e recomendação gerada pela IA. Os dados de km, coordenadas e altura são simulados porque, no cenário real, viriam do hardware embarcado nos veículos — a mesma justificativa já usada no projeto para a câmera e a geolocalização.

O **Trecho Norte é representado com cobertura parcial** no mock: parte dos pontos possui leitura completa e o restante aparece com status "aguardando escaneamento" (sem altura ou recomendação), refletindo que esse trecho do Rodoanel ainda está em obras na vida real.

### Estados cobertos pelo mock

| Estado | Onde é simulado |
| --- | --- |
| Sucesso | Trechos Oeste, Sul e Leste, com pontos e status variados |
| Cobertura parcial / dado pendente | Trecho Norte, com pontos em "aguardando escaneamento" |
| Vazio | Ao acionar "Atualizar pontos do trecho", o mock pode simular um trecho sem nenhum ponto escaneado |
| Erro | Ao acionar "Atualizar pontos do trecho", o mock pode simular falha ao carregar os dados, com botão de tentar novamente |

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
- React Native Maps

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

O mapa interativo (`react-native-maps`) apenas renderiza a base cartográfica (Apple Maps/Google Maps); nenhum ponto, coordenada de trecho, km ou dado de vegetação exibido nele é buscado de API externa — todos vêm do mock em `data/mockMap.js`.

---

# Testes Manuais — Mapa do Rodoanel

| Cenário testado | Resultado esperado | Resultado obtido | Status |
| --- | --- | --- | --- |
| Trocar o trecho selecionado (ex: "Todos" → "Trecho Norte") | A lista/mapa filtra para exibir apenas os pontos do trecho escolhido e o resumo da IA é recalculado | Filtro aplicado corretamente, apenas os 7 pontos do Trecho Norte exibidos e resumo atualizado | ✅ Passou |
| Abrir um ponto do Trecho Norte sem leitura (ex: Km 144) | Deve exibir estado "Aguardando leitura", sem `undefined` ou quebra de tela | Modal exibiu "Aguardando leitura" com mensagem explicativa, sem erros | ✅ Passou |
| Abrir um ponto com leitura completa (ex: Km 172, vermelho) | Deve exibir km, altura, status colorido, horário da leitura e recomendação da IA | Modal exibiu todos os dados corretamente (35 cm, vermelho, horário formatado e recomendação) | ✅ Passou |
| Simular falha ao atualizar um trecho ("Atualizar pontos do trecho") | Deve exibir estado de erro com botão "Tentar novamente", sem travar a tela | Estado de erro exibido corretamente; "Tentar novamente" restaurou os dados do trecho | ✅ Passou |
| Simular trecho sem nenhum ponto escaneado | Deve exibir estado vazio claro ("Nenhum trecho escaneado ainda"), não uma tela em branco | Estado vazio exibido corretamente com mensagem e botão para tentar atualizar novamente | ✅ Passou (bug corrigido: antes da correção, o trecho ficava vazio permanentemente após esse estado, pois o "sucesso" só atualizava os pontos já existentes; corrigido para regenerar a partir dos dados originais do mock) |
| Selecionar "Todos" após navegar pelos trechos | Deve agregar os pontos dos 4 trechos, cobrindo o anel completo, e mostrar o resumo geral da IA | Todos os 243 pontos exibidos (espaçamento de ~750 m), agrupados por trecho, resumo geral correto | ✅ Passou |

---

*Projeto desenvolvido para o Challenge CCR Motiva – Ciência da Computação FIAP.*