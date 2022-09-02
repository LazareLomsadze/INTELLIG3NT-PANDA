// import '../styles/main.scss';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from '../App';

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import "./style/input.css";
import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



