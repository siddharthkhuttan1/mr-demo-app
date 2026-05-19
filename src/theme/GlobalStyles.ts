import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  *::-webkit-scrollbar {
    display: none;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eaf1f8;
    color: #1a2b3c;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;
