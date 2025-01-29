import React, { useState, useEffect, useRef } from "react";
import "../Styles/RegistoDeEventoPage.css";

export function RegistoDeEventoPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [comment, setComment] = useState('');
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const modalRef = useRef();

  const eventos = [
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
      website: "https://feiragastronomica.com/",
      hora: "12:00",
      email: "geral@gmail.com",
      nomeProprio: "Joaquim",
      contacto: "999999999"
    },
    {
      id: 3,
      titulo: "Evento de Tecnologia",
      descricao: "Explore as últimas inovações tecnológicas.",
      data: "12 de Maio de 2025",
      imagem: "/Images/tecnologia.png",
      categoria: "Tecnologia",
      preco: "Gratuito",
      morada: "Parque Tecnológico, 123, Lisboa",
      acessibilidade: "Sim",
      website: "https://eventodetecnologia.com/",
      hora: "14:00",
      email: "geral@gmail.com",
      nomeProprio: "Joaquim",
      contacto: "999999999"
    },
    {
      id: 4,
      titulo: "Evento de Tecnologia",
      descricao: "Explore as últimas inovações tecnológicas.",
      data: "12 de Maio de 2025",
      imagem: "/Images/tecnologia.png",
      categoria: "Tecnologia",
      preco: "Gratuito",
      morada: "Parque Tecnológico, 123, Lisboa",
      acessibilidade: "Sim",
      website: "https://eventodetecnologia.com/",
      hora: "14:00",
      email: "geral@gmail.com",
      nomeProprio: "Joaquim",
      contacto: "999999999"
    },
    {
      id: 5,
      titulo: "Evento de Tecnologia",
      descricao: "Explore as últimas inovações tecnológicas.",
      data: "12 de Maio de 2025",
      imagem: "/Images/tecnologia.png",
      categoria: "Tecnologia",
      preco: "Gratuito",
      morada: "Parque Tecnológico, 123, Lisboa",
      acessibilidade: "Sim",
      website: "https://eventodetecnologia.com/",
      hora: "14:00",
      email: "geral@gmail.com",
      nomeProprio: "Joaquim",
      contacto: "999999999"
    },
    {
      id: 6,
      titulo: "Evento de Tecnologia",
      descricao: "Explore as últimas inovações tecnológicas.",
      data: "12 de Maio de 2025",
      imagem: "/Images/tecnologia.png",
      categoria: "Tecnologia",
      preco: "Gratuito",
      morada: "Parque Tecnológico, 123, Lisboa",
      acessibilidade: "Sim",
      website: "https://eventodetecnologia.com/",
      hora: "14:00",
      email: "geral@gmail.com",
      nomeProprio: "Joaquim",
      contacto: "999999999"
    },
    {
      id: 7,
      titulo: "Evento de Tecnologia",
      descricao: "Explore as últimas inovações tecnológicas.",
      data: "12 de Maio de 2025",
      imagem: "/Images/tecnologia.png",
      categoria: "Tecnologia",
      preco: "Gratuito",
      morada: "Parque Tecnológico, 123, Lisboa",
      acessibilidade: "Sim",
      website: "https://eventodetecnologia.com/",
      hora: "14:00",
      email: "geral@gmail.com",
      nomeProprio: "Joaquim",
      contacto: "999999999"
    },
    {
      id: 8,
      titulo: "Evento de Tecnologia",
      descricao: "Explore as últimas inovações tecnológicas.",
      data: "12 de Maio de 2025",
      imagem: "/Images/tecnologia.png",
      categoria: "Tecnologia",
      preco: "Gratuito",
      morada: "Parque Tecnológico, 123, Lisboa",
      acessibilidade: "Sim",
      website: "https://eventodetecnologia.com/",
      hora: "14:00",
      email: "geral@gmail.com",
      nomeProprio: "Joaquim",
      contacto: "999999999"
    },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleAccept = () => {
    setConfirmationPopup({ action: "accepted", comment: comment });
    setSelectedEvent(null);
  };

  const handleReject = () => {
    setConfirmationPopup({ action: "rejected", comment: comment });
    setSelectedEvent(null);
  };

  const handleCloseConfirmation = () => {
    setConfirmationPopup(false);
    setComment('');
  };

  const handleClosePopup = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedEvent(null);
      setConfirmationPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClosePopup);
    return () => {
      document.removeEventListener('mousedown', handleClosePopup);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="titulo">Confirmação dos Eventos Registrados</h1>
      
      <div className="cards-grid">
        {eventos.map((evento) => (
          <div key={evento.id} className="card" onClick={() => handleEventClick(evento)}>
            <img src={evento.imagem} alt={evento.titulo} className="card-image" />
            <div className="card-content">
              <div className="card-header">
                <h3 className="eventNome">{evento.titulo}</h3>
                <span className="eventConselho">{evento.categoria}</span>
              </div>
              <p className="eventDescricao">{evento.descricao}</p>
              <div className="card-meta">
                <span className="eventData">{evento.data}</span>
                <span className="eventPreco">{evento.preco}</span>
              </div>
              <div className="contact-info">
                <span className="eventContacto">{evento.contacto}</span>
                <span className="eventEmail">{evento.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="modal">
          <div className="modalContent" ref={modalRef}>
            <h2>{selectedEvent.titulo}</h2>
            <img src={selectedEvent.imagem} alt={selectedEvent.titulo} className="eventImage" />
            <p>{selectedEvent.descricao}</p>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Data:</span>
                <span className="detail-value">{selectedEvent.data}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Local:</span>
                <span className="detail-value">{selectedEvent.morada}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Preço:</span>
                <span className="detail-value">{selectedEvent.preco}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Acessibilidade:</span>
                <span className="detail-value">{selectedEvent.acessibilidade}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Contacto:</span>
                <span className="detail-value">{selectedEvent.contacto}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{selectedEvent.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Website:</span>
                <a href={selectedEvent.website} target="_blank" rel="noopener noreferrer" className="detail-link">
                  {selectedEvent.website}
                </a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Hora:</span>
                <span className="detail-value">{selectedEvent.hora}</span>
              </div>
            </div>

            <div className="buttonContainer">
              <button className="acceptButton" onClick={handleAccept}>Aceitar</button>
              <button className="rejectButton" onClick={handleReject}>Recusar</button>
            </div>
          </div>
        </div>
      )}

      {confirmationPopup && (
        <div className="modal">
          <div className="modalContent" ref={modalRef}>
            <h2>Evento {confirmationPopup.action === "accepted" ? "Aceito" : "Recusado"}</h2>
            <p className="confirmation-message">
              {confirmationPopup.comment && `Comentário: ${confirmationPopup.comment}`}
            </p>
            <button onClick={handleCloseConfirmation} className="closeButton">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
