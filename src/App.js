import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import GuestRoute from "./routes/GuestRoute";
import SignIn from "./pages/Signin/index";
import Home from "./pages/Home";
import theme from "./theme/index";
import store from "./store/index";

import "./mock";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <GuestRoute path="/sign-in" element={<SignIn />} />
                        <Route path="*" element={<h1>Not Found 404!</h1>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
