import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Nav } from "../components/Nav";
import theme from "../theme";

const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.bg.main}
    } 
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
