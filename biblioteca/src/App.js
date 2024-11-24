import logo from "./logo.svg";
import "./App.css";
import service from "./services/index";
import { useEffect, useState } from "react";

function App() {
  async function getBooks() {
    try {
      const result = await service.getBooks();
      console.log("Result: ", result);
    } catch (err) {
      console.logI("Erro: ", err);
    }
  }

  useEffect(() => {}, []);
  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
