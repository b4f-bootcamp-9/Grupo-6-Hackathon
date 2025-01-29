import React from "react";
import "../Styles/Eventos.css"; // Importando o CSS

export function Card(data) {
  return (
    <>
      {data.data.length > 0 ? (
        data.data.map((evento, index) => (
          <div className="evento-card" key={index}>
            <img
              src={evento.imagem ? "/Images/" + evento.imagem : "/Images/logo.png"}
              alt={evento.nomeEvento}
              className="evento-imagem"
            />
            <div className="evento-info">
              <h2 className="evento-titulo">{evento.nomeEvento}</h2>
              <p className="evento-descricao">{evento.descricao}</p>
              <p className="evento-data">{evento.data}</p>
              <div className="evento-concelho-wrapper">
                <p className="evento-concelho">{evento.concelho}</p>
              </div>
              <div className="evento-detalhes-wrapper">
                <div className="evento-detalhes" onClick={() => window.location.href = `/eventos/${evento.id}`}>Detalhes</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>A Carregar</div>
      )}
    </>
  );
}
