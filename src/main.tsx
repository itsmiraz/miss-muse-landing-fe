import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RootLayout from "./component/layouts/rootLayout";
import "@fontsource/inter/400.css"; // Regular weight (400)
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/instrument-sans/400.css"; // Regular
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import "@fontsource/instrument-sans/700.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RootLayout>
      <App />
      <Toaster />
    </RootLayout>
  </React.StrictMode>
);
