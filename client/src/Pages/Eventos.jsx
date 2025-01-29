import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Eventos.css";

export function Eventos() {
  const handleSearch = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://localhost:3001/api/eventos?c=oeiras&p=gratis&a=sim&t=tecnologia",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

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
      id: 1,
      titulo: "Sintra Con-Cê",
      descricao: "O Sintra Con-Cê é um evento artístico imersivo que reúne música, cinema, artes plásticas e natureza no coração de Sintra.",
      data: "25 de Abril de 2025",
      imagem: "/Images/musica.png",
      categoria: "Música",
    },
    {
      id: 2,
      titulo: "Festival do Leitao de Negrais",
      descricao: "O Festival do Leitão de Negrais celebra a tradição gastronómica com leitão assado, música e animação em Negrais.",
      data: "30 de Abril de 2025",
      imagem: "/Images/gastronomia.png",
      categoria: "Gastronomia",
    },
    {
      id: 3,
      titulo: "Visita o Palácio da Pena",
      descricao: "O Palácio da Pena é um icónico palácio romântico em Sintra, com cores vibrantes e vistas deslumbrantes.",
      data: "10 de Maio de 2025",
      imagem: "/Images/arlivre.png",
      categoria: "Ar Livre",
    },
    {
      id: 4,
      titulo: "Lisboa Games Week",
      descricao: "A Lisboa Games Week é o maior evento de gaming em Portugal, reunindo videojogos, esports e tecnologia.",
      data: "5 de Maio de 2025",
      imagem: "/Images/tecnologia.png",
      categoria: "Tecnologia",
    },
    {
      id: 5,
      titulo: "Passeios em Charrete Tradicional",
      descricao: "Passeios de charrete tradicional em Sintra oferecem uma experiência nostálgica pelas ruas históricas, passando por palácios e paisagens encantadoras.",
      data: "15 de Maio de 2025",
      imagem: "/Images/tradicional.png",
      categoria: "Ar Livre",
    },
    {
      id: 6,
      titulo: "Casa de Teatro de Sintra",
      descricao: "A Casa de Teatro de Sintra promove espetáculos e formações artísticas, valorizando o teatro local e a cultura portuguesa.",
      data: "20 de Maio de 2025",
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

  const handleDetalhesClick = (id) => {
    navigate(`/eventos/${id}`);
  };

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
        <button type="Button" onClick={() => handleSearch()}>A</button>
      </div>
      <div className="eventos-list">
        {filteredEventos.map((evento) => (
          <div className="evento-card" key={evento.id}>
            <img
              src={evento.imagem}
              alt={evento.titulo}
              className="evento-imagem"
            />
            <div className="evento-info">
              <h2 className="evento-titulo">{evento.titulo}</h2>
              <p className="evento-descricao">{evento.descricao}</p>
              <p className="evento-data">{evento.data}</p>
              <button className="evento-detalhes" onClick={() => handleDetalhesClick(evento.id)}>Detalhes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
