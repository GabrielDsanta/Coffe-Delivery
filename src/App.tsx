import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Themes/Default";
import { GlobalStyles } from "./styles/Global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom"


export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      
      <GlobalStyles/>
    </ThemeProvider>
  )
}


