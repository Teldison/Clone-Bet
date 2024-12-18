Este é um aplicativo em React Native que exibe promoções e jogos de um game show. Ele possui uma barra de pesquisa, cabeçalho, cartões de promoção, e uma lista de jogos com a aposta mínima.

Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina o Node.js, Expo CLI, e um emulador ou dispositivo físico para testar o aplicativo.

# Instalação
### Clone o repositório:

git clone https://github.com/Teldison/Clone-Bet.git

cd Clone-Bet

### Instale as dependências:
npm install

### Inicie o aplicativo:
expo start

### Abra o aplicativo no Expo Go no seu dispositivo ou em um emulador.

# Estrutura do Projeto
- App.tsx: Componente principal que contém o layout principal do aplicativo, incluindo o cabeçalho, barra de pesquisa e listas de promoções e jogos.
- src/components/Header.tsx: Componente de cabeçalho.
- src/components/SearchBar.tsx: Componente de barra de pesquisa.
- src/components/PromotionCard.tsx: Componente de cartão de promoção, exibindo mensagens de promoção.
- src/components/GameCard.tsx: Componente de cartão de jogo, exibindo o título do jogo e a aposta mínima.

## Componentes

### Header
Componente de cabeçalho simples.

### SearchBar
Componente de barra de pesquisa para permitir que o usuário busque promoções.

### PromotionCard
Componente de cartão que recebe uma text como propriedade e exibe mensagens de promoção.

### GameCard
Componente de cartão de jogo que recebe title e minBet como propriedades e exibe informações sobre os jogos disponíveis.

## Estilos
- O aplicativo usa um tema escuro, com um fundo preto (#121212) e destaques em verde (#00ff6a) para os títulos de seção.
- Cada cartão de jogo e promoção é estilizado com bordas arredondadas e margens internas para um visual moderno.

## Licença
- Todo o projeto foi feito de forma acadêmica e para fins de conclusão do projeto individual

## Produção
- Samuel Teldison

## Imagem de exemplo

  
- ![Imagem do WhatsApp de 2024-11-18 à(s) 12 45 16_6d90f326](https://github.com/user-attachments/assets/c3bc2a02-5a58-475f-b5fe-bf77acb9cc57)



## Realização

- ![Imagem do WhatsApp de 2024-11-18 à(s) 13 48 12_8858f217](https://github.com/user-attachments/assets/5650f8ee-a4e7-4a4d-853d-6b1c1ebcdec4)
- ![Imagem do WhatsApp de 2024-11-18 à(s) 13 48 31_330de460](https://github.com/user-attachments/assets/e835ea40-5db3-4fbb-838a-cd9971fcb2bd)
