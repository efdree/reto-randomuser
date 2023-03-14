import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { global, reset } from "./styles";
import { Global } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={global} />
    <Global styles={reset} />
    <App />
  </React.StrictMode>
);