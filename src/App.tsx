import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Themes/Default";
import { GlobalStyles } from "./styles/Global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom"
import { CoffeContextProvider } from "./contexts/CoffeContext";


export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

      <CoffeContextProvider>
        <Router/>
      </CoffeContextProvider>
      
      </BrowserRouter>
      
      <GlobalStyles/>
    </ThemeProvider>
  )
}


