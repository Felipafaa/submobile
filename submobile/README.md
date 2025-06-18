Prova Prática de React Native - Central de Alertas de Desastres
Objetivo Geral
Desenvolver um aplicativo simples em React Native para visualização e registro de
informações sobre desastres naturais. O aplicativo deverá permitir que o usuário
navegue entre diferentes telas, visualize informações pré-definidas, registre um
novo alerta localmente e veja os alertas que salvou.
Tema
Informações e Alertas de Desastres Naturais (Enchentes, Incêndios, Deslizamentos,
etc.).
Requisitos Técnicos Obrigatórios
● Linguagem: JavaScript/TypeScript com React Native
● Navegação: React Navigation (Stack Navigator)
● Gerenciamento de Estado: Hooks useState e useEffect
● Armazenamento Local:
@react-native-async-storage/async-storage
Descrição Detalhada das Tarefas
Tela 1: Boas-Vindas (WelcomeScreen)
● Funcionalidade: Exibir uma mensagem de boas-vindas e conter dois botões
para navegar para a tela de "Tipos de Desastres" e para a tela de "Alertas
Salvos".
Tela 2: Lista de Tipos de Desastres (DisasterListScreen)
● Funcionalidade: Exibir uma lista de tipos de desastres a partir de um array de
dados fixo (mock). Cada item deve ser clicável e, ao ser clicado, deve
navegar para a tela de detalhes, passando as informações do item
selecionado como parâmetro.
Tela 3: Detalhes do Desastre (DisasterDetailScreen)
● Funcionalidade: Receber os dados do desastre via route.params e exibir
na tela seu nome, descrição e dicas de prevenção.
Tela 4: Registrar Novo Alerta (RegisterAlertScreen)
● Funcionalidade: Conter um formulário com campos de texto (TextInput)
para "Localização", "Tipo de Desastre" e "Descrição". Um botão "Salvar
Alerta" deve pegar os dados do formulário, criar um objeto de alerta e salvá-lo
no AsyncStorage. Após salvar, deve retornar para a tela anterior.
Tela 5: Alertas Salvos (SavedAlertsScreen)
● Funcionalidade: Utilizando o hook useEffect, esta tela deve carregar e
exibir a lista de alertas salvos no AsyncStorage. Deve também conter um
botão "Adicionar Novo Alerta" para navegar até a RegisterAlertScreen.
Se não houver alertas, uma mensagem apropriada deve ser exibida.
Critérios de Avaliação e Pontuação
1. Estrutura do Projeto e Navegação (3,0 pontos)
○ (1,0 pt) Criação correta do projeto e instalação das dependências.
○ (2,0 pts) Configuração do StackNavigator e implementação da
navegação funcional entre as 5 telas, incluindo a passagem de
parâmetros.
2. Gerenciamento de Estado com Hooks (3,0 pontos)
○ (1,5 pt) Uso correto de useState para gerenciar os campos do
formulário na tela de registro.
○ (1,5 pt) Uso correto de useState para armazenar e exibir as listas de
dados (tipos de desastres e alertas salvos).
3. Efeitos Colaterais e Armazenamento Local (4,0 pontos)
○ (2,0 pts) Implementação correta da função para salvar um novo alerta
no AsyncStorage, utilizando JSON.stringify.
○ (2,0 pts) Uso correto de useEffect para carregar os dados do
AsyncStorage na tela de alertas salvos, utilizando JSON.parse e
tratando o caso de não haver dados.