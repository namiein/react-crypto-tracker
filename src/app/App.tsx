import React from "react";
import { createGlobalStyle } from "styled-components";
import Router from "routes";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color:${(props) => props.theme.bgColor};
        color:${(props) => props.theme.textColor}
    }

    a {
        text-decoration:none;
        color: inherit;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
