import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";

import App from "app/App";

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App />
                <ReactQueryDevtools initialIsOpen />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
