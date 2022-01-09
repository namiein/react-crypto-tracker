import React from "react";
import { createGlobalStyle } from "styled-components";
import Router from "routes";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-weight: 300;
        background-color:${(props) => props.theme.bgColor};
        color:${(props) => props.theme.textColor};
        line-height: 1.2;    
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
