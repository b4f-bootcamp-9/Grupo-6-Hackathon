import React, { useState, useEffect } from "react";
import "../Styles/LandingPage.css";

export function LandingPage() {
  const images = [
    "/Images/arlivre.png",
    "/Images/tecnologia.png",
    "/Images/teatro.png",
    "/Images/gastronomia.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Configurar autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Troca a imagem a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [images.length]);

  // Função para trocar manualmente
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const cards = [
    {
      image: "/Images/gastronomia.png",
      description: "Festival do Leitão de Negrais",
    },
    {
      image: "/Images/tecnologia.png",
      description: "Lisboa Games Week",
    },
    {
      image: "/Images/teatro.png",
      description: "Casa de Teatro de Sintra",
    },
  ];

  return (
    <div className="landing-pages">
      <h1 className="carousel-title">Distrito Vivo</h1>
      <div className="carousel-slogan">Onde a arte encontra a vida.</div>
      <div className="carousel-container">
        <div
          className="carousel-slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div className="carousel-slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className="cards-containers">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={`Card ${index + 1}`} />
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
