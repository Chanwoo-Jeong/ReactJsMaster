import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme } from "./theme";
import { QueryClient , QueryClientProvider} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider theme={darkTheme}> */}
        <App />
      {/* </ThemeProvider> */}
    </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
