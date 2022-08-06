import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './themes/globalStyles'
import { MoralisProvider } from "react-moralis";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <ThemeProvider theme={Theme}> */}
    <GlobalStyle />
    <MoralisProvider serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL} appId={process.env.REACT_APP_MORALIS_APPLICATION_ID} >
      <Router>
        <App />
      </Router>
    </MoralisProvider>
    {/* </ThemeProvider> */}
    {/* </Provider> */}
  </React.StrictMode>,rootElement
);


reportWebVitals();
