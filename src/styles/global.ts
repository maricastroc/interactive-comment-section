import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
    }

  body {
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['grayish-blue-500']};
    -webkit-font-smoothing: antialiased;
    margin-bottom: 2.5rem;
  }

  body, input, textarea, button {
    font: 400 1rem Rubik, sans-serif;
  }
`
