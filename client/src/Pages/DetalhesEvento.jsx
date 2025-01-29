import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/DetalhesEvento.css";

export function DetalhesEvento() {
    const { id } = useParams();

    const eventos = [
        {
            id: 1,
            titulo: "Sintra Con-Cê",
            descricao: "O Sintra Con-Cê é um evento artístico imersivo que reúne música, cinema, artes plásticas e natureza no coração de Sintra.",
            data: "25 de Abril de 2025",
            imagem: "/Images/musica.png",
            categoria: "Música",
            preco: "Gratuito",
            morada: "R. Gago Coutinho 8, 2710-566 Sintra",
            acessibilidade: "Sim",
            website: "https://a3associacao.wixsite.com/cultura/sintra-con-ce",
        },
        {
            id: 2,
            titulo: "Festival de Leitão de Negrais",
            descricao: "O Festival do Leitão de Negrais celebra a tradição gastronómica com leitão assado, música e animação em Negrais.",
            data: "30 de Abril de 2025",
            imagem: "/Images/gastronomia.png",
            categoria: "Gastronomia",
            preco: "15€",
            morada: "Largo do Rossio, Negrais, 2715-314 Almargem do Bpo.",
            acessibilidade: "Sim",
            website: "https://festanegrais.pt",
        },
        {
            id: 3,
            titulo: "Visita ao Palácio de Pena",
            descricao: "O Palácio da Pena é um icónico palácio romântico em Sintra, com cores vibrantes e vistas deslumbrantes.",
            data: "10 de Maio de 2025",
            imagem: "/Images/arte.png",
            categoria: "Ar Livre",
            preco: "13€",
            morada: "Estrada da Pena, 2710-609 Sintra",
            acessibilidade: "Não",
            website: "https://www.parquesdesintra.pt/pt/parques-monumentos/parque-e-palacio-nacional-da-pena/",
        },
        {
            id: 4,
            titulo: "Lisboa Games Week",
            descricao: "A Lisboa Games Week é o maior evento de gaming em Portugal, reunindo videojogos, esports e tecnologia.",
            data: "5 de Maio de 2025",
            imagem: "/Images/tecnologia.png",
            categoria: "Tecnologia",
            preco: "13€",
            morada: "Estrada da Pena, 2710-609 Sintra",
            acessibilidade: "Sim",
            website: "https://www.parquesdesintra.pt/pt/parques-monumentos/parque-e-palacio-nacional-da-pena/",
          },
          {
            id: 5,
            titulo: "Passeios em Charrete Tradicional",
            descricao: "Passeios de charrete tradicional em Sintra oferecem uma experiência nostálgica pelas ruas históricas, passando por palácios e paisagens encantadoras.",
            data: "15 de Maio de 2025",
            imagem: "/Images/tradicional.png",
            categoria: "Ar Livre",
            preco: "13€",
            morada: "Estrada da Pena, 2710-609 Sintra",
            acessibilidade: "Não",
            website: "https://www.parquesdesintra.pt/pt/parques-monumentos/parque-e-palacio-nacional-da-pena/",
          },
          {
            id: 6,
            titulo: "Casa de Teatro de Sintra",
            descricao: "A Casa de Teatro de Sintra promove espetáculos e formações artísticas, valorizando o teatro local e a cultura portuguesa.",
            data: "20 de Maio de 2025",
            imagem: "/Images/teatro.png",
            categoria: "Teatro",
            preco: "13€",
            morada: "Estrada da Pena, 2710-609 Sintra",
            acessibilidade: "Não",
            website: "https://www.parquesdesintra.pt/pt/parques-monumentos/parque-e-palacio-nacional-da-pena/",
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
