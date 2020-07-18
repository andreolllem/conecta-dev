import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/index";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}

export default App;
