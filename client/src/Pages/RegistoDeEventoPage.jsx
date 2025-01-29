import React, { useState } from "react";
import "../Styles/RegistoDeEventoPage.css";

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
    }
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
    <div className="container">
      <h1 className="titulo">Confirmação dos Eventos Registrados</h1>
      {eventos.map((evento) => (
        <div key={evento.id} className="card" onClick={() => handleEventClick(evento)}>
          <div className="eventInfo">
            <span className="eventNome">{evento.titulo}</span>
            <span className="eventDescricao">{evento.descricao}</span>
            <span className="eventContacto"><strong>Contacto:</strong> {evento.contacto}</span>
            <span className="eventEmail"><strong>Email:</strong> {evento.email}</span>
            <span className="eventNomeProprio"><strong>Nome:</strong> {evento.nomeProprio}</span>
            <span className="eventHora"><strong>Hora:</strong> {evento.hora}</span>
          </div>
          <div className="eventDetails">
            <span className="eventConselho">{evento.categoria}</span>
            <span className="eventData">{evento.data}</span>
          </div>
        </div>
      ))}

      {selectedEvent && (
        <div className="modal">
          <div className="modalContent">
            <h2>{selectedEvent.titulo}</h2>
            <img src={selectedEvent.imagem} alt={selectedEvent.titulo} className="eventImage" />
            <p>{selectedEvent.descricao}</p>
            <p><strong>Data:</strong> {selectedEvent.data}</p>
            <p><strong>Local:</strong> {selectedEvent.morada}</p>
            <p><strong>Preço:</strong> {selectedEvent.preco}</p>
            <p><strong>Acessibilidade:</strong> {selectedEvent.acessibilidade}</p>
            <p><strong>Contacto:</strong> {selectedEvent.contacto}</p>
            <p><strong>Email:</strong> {selectedEvent.email}</p>
            <p><strong>Nome Proprio:</strong> {selectedEvent.nomeProprio}</p>
            <p><strong>Website:</strong> <a href={selectedEvent.website} target="_blank" rel="noopener noreferrer">{selectedEvent.website}</a></p>
            <p><strong>Hora:</strong> {selectedEvent.hora}</p>

            <div className="buttonContainer">
              <button className="acceptButton" onClick={handleAccept}>Aceitar</button>
              <button className="rejectButton" onClick={handleReject}>Recusar</button>
            </div>
          </div>
        </div>
      )}

      {confirmationPopup && (
        <div className="modal">
          <div className="modalContent">
            <h2>Evento {confirmationPopup.action === "accepted" ? "Aceito" : "Recusado"}</h2>
            <button onClick={handleCloseConfirmation} className="closeButton">Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
