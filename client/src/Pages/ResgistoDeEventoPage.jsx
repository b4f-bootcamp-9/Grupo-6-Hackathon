import React, { useState } from "react";
import styles from "../Styles/ResgistoDeEventoPage.module.css";

export function ResgistoDeEvento() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [comment, setComment] = useState('');
  const [confirmationPopup, setConfirmationPopup] = useState(false);
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
      website: "https://feiragastronomica.com/"
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
      website: "https://eventodetecnologia.com/"
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
        website: "https://eventodetecnologia.com/"
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
        website: "https://eventodetecnologia.com/"
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
        website: "https://eventodetecnologia.com/"
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
        website: "https://eventodetecnologia.com/"
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
        website: "https://eventodetecnologia.com/"
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
        website: "https://eventodetecnologia.com/"
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

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Confirmação dos Eventos Registrados</h1>
      {eventos.map((evento) => (
        <div key={evento.id} className={styles.card} onClick={() => handleEventClick(evento)}>
          <div className={styles.eventInfo}>
            <span className={styles.eventNome}>{evento.titulo}</span>
            <span className={styles.eventDescricao}>{evento.descricao}</span>
          </div>
          <div className={styles.eventDetails}>
            <span className={styles.eventConselho}>{evento.categoria}</span>
            <span className={styles.eventData}>{evento.data}</span>
          </div>
        </div>
      ))}

      {selectedEvent && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{selectedEvent.titulo}</h2>
            <img src={selectedEvent.imagem} alt={selectedEvent.titulo} className={styles.eventImage} />
            <p>{selectedEvent.descricao}</p>
            <p><strong>Data:</strong> {selectedEvent.data}</p>
            <p><strong>Local:</strong> {selectedEvent.morada}</p>
            <p><strong>Preço:</strong> {selectedEvent.preco}</p>
            <p><strong>Acessibilidade:</strong> {selectedEvent.acessibilidade}</p>
            <p><strong>Website:</strong> <a href={selectedEvent.website} target="_blank" rel="noopener noreferrer">{selectedEvent.website}</a></p>
            <textarea 
              className={styles.commentBox} 
              placeholder="Adicione um comentário..." 
              value={comment} 
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className={styles.buttonContainer}>
              <button className={styles.acceptButton} onClick={handleAccept}>Aceitar</button>
              <button className={styles.rejectButton} onClick={handleReject}>Recusar</button>
            </div>
          </div>
        </div>
      )}

      {confirmationPopup && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Evento {confirmationPopup.action === "accepted" ? "Aceito" : "Recusado"}</h2>
            <p>Comentário: {confirmationPopup.comment}</p>
            <button onClick={handleCloseConfirmation} className={styles.closeButton}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
