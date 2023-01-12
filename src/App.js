import Navbar from "./Componentes/Navbar";
import Characters from "./Componentes/Characters";
import React, { useEffect, useState } from "react";
import Pagination from "./Componentes/Paginacion";



function App() {
  //el useState retorna el estado y la funcion que modifica el estado 
  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState([]);
  const initialUrl = "https://rickandmortyapi.com/api/character";

  //la que se encarga en hacer la llamada de red 
  const fetchCharacters = (url) => {
    
    //para poder realizar llamada de red para obtener cosas
    fetch(url)
      //retorna una respuesta que convertimos a un objeto json
      .then(Response => Response.json())
      //nos va retornar ya nos va traer los formatos convertidos de formato.json a javascritp
      .then(data => {
        setCharacters(data.results)
        setinfo(data.info);
      })
      .catch(error => console.log(error))
  };
  //realizan una llamada de red a la api con la nueva url 
  const onPrevious = () => {
    fetchCharacters(info.prev)
  }
  const onNext = () => {
    fetchCharacters(info.next)
  }
  useEffect(() => {
    //llama a la funcion 
    fetchCharacters(initialUrl);
    //aca le decimos que con dependecia vacia solo se ejecuta una unica vez cuando el componente se renderisa una unica vez
  }, [])
  return (
    //fragmento vacio 
    <>
      <Navbar brand="Riki Y Morty App" />
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
      </div>
    </>

  );
}

export default App;
