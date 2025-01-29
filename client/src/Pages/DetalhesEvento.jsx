import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/DetalhesEvento.css";

export function DetalhesEvento() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const fetchData = async () => {
      fetch(`http://localhost:3001/api/eventos/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(result);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  //console.log(data);
  //   if (Array.isArray(data)) {
  //     console.log("dadasdasd");
  //     console.log(data);
  //   } else {
  //     console.log(JSON.parse(data));
  //   }

  const evento = [
    {
      id: 1,
      nomeEvento: "Sintra Con-Cê",
      descricao:
        "O Sintra Con-Cê é um evento artístico imersivo que reúne música, cinema, artes plásticas e natureza no coração de Sintra.",
      data: "25 de Abril de 2025",
      imagem: "/Images/musica.png",
      categoria: "Música",
      preco: "Gratuito",
      morada: "R. Gago Coutinho 8, 2710-566 Sintra",
      acessibilidade: "Sim",
      website: "https://a3associacao.wixsite.com/cultura/sintra-con-ce",
    },
    // {
    //   id: 2,
    //   titulo: "Festival de Leitão de Negrais",
    //   descricao:
    //     "O Festival do Leitão de Negrais celebra a tradição gastronómica com leitão assado, música e animação em Negrais.",
    //   data: "30 de Abril de 2025",
    //   imagem: "/Images/gastronomia.png",
    //   categoria: "Gastronomia",
    //   preco: "15€",
    //   morada: "Largo do Rossio, Negrais, 2715-314 Almargem do Bpo.",
    //   acessibilidade: "Sim",
    //   website: "https://festanegrais.pt",
    // },
    // {
    //   id: 3,
    //   titulo: "Visita ao Palácio de Pena",
    //   descricao:
    //     "O Palácio da Pena é um icónico palácio romântico em Sintra, com cores vibrantes e vistas deslumbrantes.",
    //   data: "10 de Maio de 2025",
    //   imagem: "/Images/arlivre.png",
    //   categoria: "Ar Livre",
    //   preco: "13€",
    //   morada: "Estrada da Pena, 2710-609 Sintra",
    //   acessibilidade: "Não",
    //   website:
    //     "https://www.parquesdesintra.pt/pt/parques-monumentos/parque-e-palacio-nacional-da-pena/",
    // },
    // {
    //   id: 4,
    //   titulo: "Lisboa Games Week",
    //   descricao:
    //     "A Lisboa Games Week é o maior evento de gaming em Portugal, reunindo videojogos, esports e tecnologia.",
    //   data: "5 de Maio de 2025",
    //   imagem: "/Images/tecnologia.png",
    //   categoria: "Tecnologia",
    //   preco: "20€",
    //   morada: "R. do Bojador, 1998-010 Lisboa",
    //   acessibilidade: "Sim",
    //   website: "https://www.lisboagamesweek.pt",
    // },
    // {
    //   id: 5,
    //   titulo: "Passeios em Charrete Tradicional",
    //   descricao:
    //     "Passeios de charrete tradicional em Sintra oferecem uma experiência nostálgica pelas ruas históricas, passando por palácios e paisagens encantadoras.",
    //   data: "15 de Maio de 2025",
    //   imagem: "/Images/tradicional.png",
    //   categoria: "Ar Livre",
    //   preco: "8.5€",
    //   morada: "Rua do Moinho, n.º 13-A, Aruil 2715-421, Almargem do Bispo",
    //   acessibilidade: "Não",
    //   website: "https://www.qtour.pt/index.php/pt/",
    // },
    // {
    //   id: 6,
    //   titulo: "Casa de Teatro de Sintra",
    //   descricao:
    //     "A Casa de Teatro de Sintra promove espetáculos e formações artísticas, valorizando o teatro local e a cultura portuguesa.",
    //   data: "20 de Maio de 2025",
    //   imagem: "/Images/teatro.png",
    //   categoria: "Teatro",
    //   preco: "7.5€",
    //   morada: "R. Veiga da Cunha 20, 2710-627 Sintra",
    //   acessibilidade: "Sim",
    //   website: "https://chaodeoliva.com",
    // },
    // ... outros eventos
  ];

  //   const evento = eventos.find((evento) => evento.id === parseInt(id));

  //   if (!evento) {
  //     return <p>Evento não encontrado!</p>;
  //   }

  return (
    <div className="detalhes-evento-page">
      {data && data.length > 0 ? (
        <>
          <div className="detalhes-header">
            <div className="back-arrow" onClick={() => navigate("/eventos")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#006F8E"
                className="back-arrow-icon"
                viewBox="0 0 16 16"
              >
                <path d="M15 8a.5.5 0 0 1-.5.5H3.707l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.498.498 0 0 1 0-.707l5-5a.5.5 0 1 1 .708.708L3.707 7.5H14.5a.5.5 0 0 1 .5.5z" />
              </svg>
            </div>

            <h1 className="detalhes-evento-title">{data[0].nomeEvento}</h1>
          </div>
          <p className="detalhes-evento-data">{data[0].data}</p>
          <div className="detalhes-evento-card">
            <div className="detalhes-evento-content">
              <div className="detalhes-evento-imagem-container">
                <img
                  src={data[0].imagem}
                  alt={data[0].nomeEvento}
                  className="detalhes-evento-imagem"
                />
              </div>
              <p className="detalhes-evento-descricao">{data[0].descricao}</p>
            </div>
            <div className="detalhes-evento-info">
              {data[0].preco === true ? (
                <p>
                  <strong>Entrada: </strong> Paga
                </p>
              ) : (
                <p>
                  <strong>Entrada: </strong> Grátis
                </p>
              )}
              <p>
                <strong>Morada:</strong> {data[0].morada}
              </p>

              {data[0].acessivel === true && (
                <p>
                  <strong>Acessibilidade: </strong>
                  sim
                </p>
              )}

              {data[0].website && (
                <p>
                  <a
                    href={data[0].website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Visitar Website</button>
                  </a>
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div>
          <p>400 - Parece que aqui não há nada!</p>
          <p>
            <a href="/">Clique aqui</a> para voltar à página inicial
          </p>
        </div>
      )}
    </div>
  );
}
