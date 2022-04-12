import { useState, useEffect } from "react";
import Characters from "./Components/Characters";
import "../src/Styles/Css/global.css"



function App() {

  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results))
      .catch((err) => console.log(err));
  }, [currentPage]);

  
  const backAll = () => {
    setCurrentPage(1)
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  };

  const nextPage = () => {
    setCurrentPage (currentPage + 1)
  }

  console.log(nextPage)

  return (
          <>
            <h1 onClick={backAll}>Meus Personagens</h1>
            <Characters characterList={characterList} /> 
            <p className="container--button">
              <button onClick={previousPage} className="button">Voltar</button>
              <button onClick={nextPage} className="button">Avançar</button>
            </p>
          </>
  );
}

export default App;

