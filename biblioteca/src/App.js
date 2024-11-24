import logo from "./logo.svg";
import "./App.css";
import service from "./services/index";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([{ id: "1", title: "A" }]);
  const [estante1, setEstante1] = useState([]);
  const [estante2, setEstante2] = useState([]);
  async function getBooks() {
    try {
      const result = await service.getBooks();
      console.log("Result: ", result);
    } catch (err) {
      console.logI("Erro: ", err);
    }
  }

  function adicionarEstante1(book) {
    setEstante1((prev) => [...prev, book]);
  }

  function adicionarEstante2(book) {
    setEstante2((prev) => [...prev, book]);
  }

  useEffect(() => {}, []);
  return (
    <div className="App">
      <div>
        {books &&
          books.map((book) => {
            return (
              <>
                <h1>{book.title}</h1>
                <button type="button" onClick={() => adicionarEstante1(book)}>
                  Adicionar a estante 1
                </button>
                <button type="button" onClick={() => adicionarEstante2(book)}>
                  Adicionar a estante 2
                </button>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;
