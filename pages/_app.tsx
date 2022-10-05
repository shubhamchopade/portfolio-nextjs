import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { Nav } from "../components/Nav";
import theme, { StylesTypes } from "../components/theme";

const GlobalStyles = createGlobalStyle`
    body {
      background-color:#282729;
      position: relative;
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
