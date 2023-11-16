import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Router from "./shared/Router";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import CardList from "./components/CardList";
import { Reset } from "styled-reset";

function App() {
  return (
    <div>
      <div></div>
      <Reset />
      {/* <Header />
      <Form />
      <CardList /> */}
      <Router />
      <GlobalStyle />
    </div>
  );
}

export default App;
