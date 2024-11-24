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
      setBooks(result.data);
    } catch (err) {
      console.log("Erro: ", err);
    }
  }

  function adicionarEstante1(book) {
    setEstante1((prev) => [...prev, book]);
  }

  function adicionarEstante2(book) {
    setEstante2((prev) => [...prev, book]);
  }

  function adicionarEstouLendo(item, numeroEstante) {
    if (numeroEstante == 1) {
      const updatedEstante = estante1.map((livro) => {
        if (livro === item) {
          const newItem = { ...item, status: "estouLendo" };
          return newItem;
        } else {
          return item;
        }
      });
      setEstante1(updatedEstante);
    } else {
    }
  }

  useEffect(() => {
    getBooks();
    console.log("Books: ", books);
  }, []);
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
        <h1>Estante 1</h1>
        {estante1 &&
          estante1.map((item) => {
            return (
              <>
                <h1>{item.title}</h1>
                <button
                  type="button"
                  onClick={() => adicionarEstouLendo(item, 1)}
                >
                  Adiciona a estou lendo
                </button>
              </>
            );
          })}
        <h1>Estante 2</h1>
        {estante2 &&
          estante2.map((item) => {
            return (
              <>
                <h1>{item.title}</h1>
              </>
            );
          })}
        <h1>Estou lendo</h1>
        {estante1 &&
          estante1.map((item) => {
            return (
              <>
                {item.status === "estouLendo" ? (
                  <div>{item.title}</div>
                ) : (
                  <div></div>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;
