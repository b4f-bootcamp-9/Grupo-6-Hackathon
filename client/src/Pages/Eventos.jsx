
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "../Styles/Eventos.css";
import { Card } from "../components/card";


function createQuery(queryObject = {}) {
  let queryString = Object.keys(queryObject)
    .filter(
      (key) =>
        queryObject[key] &&
        !(Array.isArray(queryObject[key]) && !queryObject[key].length)
    )
    .map((key) => {
      return Array.isArray(queryObject[key])
        ? queryObject[key]
            .map(
              (item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
            )
            .join("&")
        : `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`;
    })
    .join("&");
  return queryString ? `?${queryString}` : "";
}

export function Eventos() {
  const [query, setQuery] = useState("");
  const [fetchResult, setFetchResult] = useState([]);
  useEffect(() => {
    console.log(query);


    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const fetchData = async () => {
      // http://localhost:3001/api/eventos?c=oeiras&p=gratis&a=sim&t=tecnologia
      fetch(`http://localhost:3001/api/eventos${query}`, requestOptions)

        .then((response) => response.json())
        .then((result) => {
          setFetchResult(result);
          console.log(result);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, [query]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [concelho, setConcelho] = useState("");
  const [preco, setPreco] = useState("");
  const [acessivel, setAcessivel] = useState("");

  const [filtro, setFiltro] = useState({});


  const categorias = [
    "Tecnologia",
    "Gastronomia",
    "Ar Livre",
    "Tradicional",
    "Música",
    "Teatro",
  ];



  const [filtroCategoria, setFiltroCategoria] = useState([]);

  console.log("Fetch Result");
  console.log(fetchResult);


  const handleCategoryChange = (categoria) => {
    setFiltroCategoria(
      filtroCategoria.includes(categoria)
        ? filtroCategoria.filter((cat) => cat !== categoria)
        : [...filtroCategoria, categoria]
    );
  };

  const handleConcelhoChange = (concelho) => {
    setConcelho(concelho);
  };

  useEffect(() => {
    if (filtroCategoria) {
      setFiltro((prevFiltro) => {
        return { ...prevFiltro, t: filtroCategoria };
      });
    }
    if (concelho) {
      console.log("concelho");
      
      console.log(concelho);
      
      setFiltro((prevFiltro) => {
        return { ...prevFiltro, c: concelho };
      });
    }
  }, [filtroCategoria, concelho]);

  const handlePreco = () => {
    setFiltro((prevFiltro) => {
      if (prevFiltro.p === 1) {
        return { ...prevFiltro, p: 0 };
      } else {
        return { ...prevFiltro, p: 1 };
      }
    });
  };

  const handleAcessibilidade = () => {
    setFiltro((prevFiltro) => {
      if (prevFiltro.a === 1) {
        return { ...prevFiltro, a: 0 };
      } else {
        return { ...prevFiltro, a: 1 };
      }
    });
  };

  useEffect(() => {
    setQuery(createQuery(filtro));
  }, [filtro]);

  useEffect(() => {
    //console.log(filtroCategoria);
  }, [filtroCategoria]);

  // const handleDetalhesClick = (id) => {
  //   navigate(`/eventos/${id}`);
  // };

  return (
    <div className="eventos-page">
      <div className="filtro">
        <h2>Filtro:</h2>
        <select
          name="c"
          id="ListaConcelhos"
          value={concelho}
          onChange={(e) => handleConcelhoChange(e.target.value)}
        >
          <option value="Todos">Concelhos</option>
          <option value="Lisboa">Lisboa</option>
          <option value="Amadora">Amadora</option>
          <option value="Oeiras">Oeiras</option>
          <option value="Sintra">Sintra</option>
          <option value="Cascais">Cascais</option>
          <option value="Loures">Loures</option>
          <option value="Mafra">Mafra</option>
          <option value="Odivelas">Odivelas</option>
          <option value="Vila Franca de Xira">Vila Franca de Xira</option>
          <option value="Torres Vedras">Torres Vedras</option>
          <option value="Sobral de Monte Agraço">Sobral de Monte Agraço</option>
          <option value="Alenquer">Alenquer</option>
          <option value="Cadaval">Cadaval</option>
          <option value="Arruda dos Vinhos">Arruda dos Vinhos</option>
          <option value="Lourinhã">Lourinhã</option>
          <option value="Bombarral">Bombarral</option>
        </select>
        {categorias.map((categoria, index) => (
          <div key={index} className="checkbox-container">
            <input
              type="checkbox"
              id={categoria}
              name={categoria}
              value={categoria}
              onChange={() => handleCategoryChange(categoria)}
            />
            <label htmlFor={categoria}>{categoria}</label>
          </div>
        ))}
        <input
          type="checkbox"
          id="gratis"
          name="p"
          value="1"
          onChange={(e) => handlePreco()}
        />
        <label htmlFor="gratis">Grátis</label>
        <input
          type="checkbox"
          id="acessivel"
          name="a"
          value="1"

          onChange={(e) => handleAcessibilidade()}
        />
        <label htmlFor="acessivel">Acessível</label>
      </div>
      <div className="eventos-list">
        {fetchResult && <Card data={fetchResult} />}
       

      </div>
    </div>
  );
}
