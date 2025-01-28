import React, { useState } from "react";
import "../Styles/Eventos.css";

export function Eventos() {

   const handleSearch = async () =>{
    

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("http://localhost:3001/api/eventos?c=oeiras&p=gratis&a=sim&t=tecnologia", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
   }



  const [selectedCategories, setSelectedCategories] = useState([]);

  const categorias = [
    "Tecnologia",
    "Gastronomia",
    "Ar Livre",
    "Tradicional",
    "Música",
    "Teatro",
  ];

  const eventos = [
    {
      titulo: "Festival de Música",
      descricao: "Um incrível festival de música com bandas ao vivo.",
      data: "25 de Abril de 2023",
      imagem: "/Images/concerto.png",
      categoria: "Música",
    },
    {
      titulo: "Feira Gastronômica",
      descricao: "Delicie-se com a melhor comida da região.",
      data: "30 de Abril de 2023",
      imagem: "/Images/gastronomia.png",
      categoria: "Gastronomia",
    },
    {
      titulo: "Exposição de Arte",
      descricao: "Veja obras de arte de artistas locais.",
      data: "10 de Maio de 2023",
      imagem: "/Images/panos.png",
      categoria: "Tradicional",
    },
    {
      titulo: "Congresso de Tecnologia",
      descricao: "Explore as últimas inovações tecnológicas.",
      data: "5 de Maio de 2023",
      imagem: "/Images/tecnologia.png",
      categoria: "Tecnologia",
    },
    {
      titulo: "Caminhada na Natureza",
      descricao:
        "Aproveite uma caminhada ao ar livre com guias especializados.",
      data: "15 de Maio de 2023",
      imagem: "/Images/arlivre.png",
      categoria: "Ar Livre",
    },
    {
      titulo: "Peça de Teatro",
      descricao: "Assista a uma emocionante peça de teatro.",
      data: "20 de Maio de 2023",
      imagem: "/Images/teatro.png",
      categoria: "Teatro",
    },
  ];

  const handleCategoryChange = (categoria) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(categoria)
        ? prevSelectedCategories.filter((cat) => cat !== categoria)
        : [...prevSelectedCategories, categoria]
    );
  };

  const filteredEventos = eventos.filter(
    (evento) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(evento.categoria)
  );

  return (
    <div className="eventos-page">
      <div className="filtro">
        <h2>Filtro:</h2>
        <select name="c" id="ListaConcelhos">
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
              onChange=""
            />
            <label htmlFor="gratis">Grátis</label>
            <input
              type="checkbox"
              id="acessivel"
              name="a"
              value="1"
              onChange=""
            />
            <label htmlFor="acessivel">Acessível</label>
            <button type="Button" onClick={()=>handleSearch()}>A</button>
      </div>
      <div className="eventos-list">
        {filteredEventos.map((evento, index) => (
          <div className="evento-card" key={index}>
            <img
              src={evento.imagem}
              alt={evento.titulo}
              className="evento-imagem"
            />
            <div className="evento-info">
              <h2 className="evento-titulo">{evento.titulo}</h2>
              <p className="evento-descricao">{evento.descricao}</p>
              <p className="evento-data">{evento.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
