import React, { useState } from "react";
import "../Styles/Eventos.css";

export function Eventos() {
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
            descricao: "Aproveite uma caminhada ao ar livre com guias especializados.",
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
        (evento) => selectedCategories.length === 0 || selectedCategories.includes(evento.categoria)
    );

    return (
        <div className="eventos-page">
            <div className="filtro">
                <h2>Filtro:</h2>
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
            </div>
            <div className="eventos-list">
                {filteredEventos.map((evento, index) => (
                    <div className="evento-card" key={index}>
                        <img src={evento.imagem} alt={evento.titulo} className="evento-imagem" />
                        <div className="evento-info">
                            <h2 className="evento-titulo">{evento.titulo}</h2>
                            <p className="evento-descricao">{evento.descricao}</p>
                            <p className="evento-data">{evento.data}</p>
                            <button className="evento-detalhes">Detalhes</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
