import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./components/header";
import { Content } from "./components/content";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
