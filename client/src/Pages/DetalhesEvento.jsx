import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/DetalhesEvento.css";

export function DetalhesEvento() {
    const { id } = useParams();

    const eventos = [
        {
            id: 1,
            titulo: "Festival de Música",
            descricao: "Um incrível festival de música com bandas ao vivo.",
            data: "25 de Abril de 2025",
            imagem: "/Images/concerto.png",
            categoria: "Música",
            preco: "Gratuito",
            morada: "Rua dos Concertos, 123, Lisboa",
            acessibilidade: "Sim",
            website: "https://festivaldemusica.com",
        },
        {
            id: 2,
            titulo: "Feira Gastronômica",
            descricao: "Delicie-se com a melhor comida da região.",
            data: "30 de Abril de 2025",
            imagem: "/Images/gastronomia.png",
            categoria: "Gastronomia",
            preco: "5€",
            morada: "Praça da Gastronomia, 456, Lisboa",
            acessibilidade: "Não",
            website: "https://feiragastronomica.com",
        },
        {
            id: 3,
            titulo: "Exposição de Arte",
            descricao: "Veja obras de arte de artistas locais.",
            data: "10 de Maio de 2025",
            imagem: "/Images/arte.png",
            categoria: "Tradicional",
            preco: "5€",
            morada: "Praça da Gastronomia, 456, Lisboa",
            acessibilidade: "Não",
            website: "https://feiragastronomica.com",
        },
        // ... outros eventos
    ];

    const evento = eventos.find(evento => evento.id === parseInt(id));

    if (!evento) {
        return <p>Evento não encontrado!</p>;
    }

    return (
        <div className="detalhes-evento-page">
            <h1 className="detalhes-evento-title">{evento.titulo}</h1>
            <p className="detalhes-evento-data">{evento.data}</p>
            <div className="detalhes-evento-content">
                <div className="detalhes-evento-imagem-container">
                    <img src={evento.imagem} alt={evento.titulo} className="detalhes-evento-imagem" />
                </div>
                <p className="detalhes-evento-descricao">{evento.descricao}</p>
                <div className="detalhes-evento-info">
                    <p><strong>Preço:</strong> {evento.preco}</p>
                    <p><strong>Morada:</strong> {evento.morada}</p>
                    <p><strong>Acessibilidade:</strong> {evento.acessibilidade}</p>
                    <p><strong>Website:</strong> <a href={evento.website} target="_blank" rel="noopener noreferrer">{evento.website}</a></p>
                </div>
            </div>
        </div>
    );
}
