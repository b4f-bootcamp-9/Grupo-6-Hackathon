import React, { useState } from "react";
import styles from "../Styles/RegistarEventoPage.module.css";

export function RegistarEventoPage() {
  const [formData, setFormData] = useState({
    nomeEvento: '',
    descricao: '',
    data: '',
    morada: '',
    distrito: '',
    acessivel: false,
    pago: false,
    preco: '',
    nomePessoa: '',
    contacto: '',
    email: '',
    link: '',
    foto: null
  });

  // Lista de distritos de Lisboa
  const distritosLisboa = [
    "Ajuda",
    "Alcântara",
    "Alvalade",
    "Areeiro",
    "Arroios",
    "Avenidas Novas",
    "Beato",
    "Belém",
    "Benfica",
    "Campo de Ourique",
    "Campolide",
    "Carnide",
    "Estrela",
    "Lumiar",
    "Marvila",
    "Misericórdia",
    "Olivais",
    "Parque das Nações",
    "Penha de França",
    "Santa Clara",
    "Santa Maria Maior",
    "Santo António",
    "São Domingos de Benfica",
    "São Vicente"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Registrar Evento</h1>
      
      <form onSubmit={handleSubmit} className={styles.formulario}>
        {/* Seção de Informações do Evento */}
        <div className={styles.secao}>
          <h2>Informações do Evento</h2>
          
          <div className={styles.grupoForm}>
            <label>Nome do Evento:</label>
            <input
              type="text"
              name="nomeEvento"
              value={formData.nomeEvento}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.grupoForm}>
            <label>Descrição:</label>
            <textarea
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.grupoForm}>
            <label>Data:</label>
            <input
              type="datetime-local"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.grupoForm}>
            <label>Morada:</label>
            <input
              type="text"
              name="morada"
              value={formData.morada}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.grupoForm}>
            <label>Distrito:</label>
            <select
              name="distrito"
              value={formData.distrito}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um distrito</option>
              {distritosLisboa.map((distrito, index) => (
                <option key={index} value={distrito}>
                  {distrito}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.grupoCheck}>
            <label>
              <input
                type="checkbox"
                name="pago"
                checked={formData.pago}
                onChange={handleChange}
              />
              Evento Pago?
            </label>
          </div>

          {formData.pago && (
            <div className={styles.grupoForm}>
              <label>Preço (€):</label>
              <input
                type="number"
                name="preco"
                value={formData.preco}
                onChange={handleChange}
                step="0.01"
              />
            </div>
          )}

          <div className={styles.grupoCheck}>
            <label>
              <input
                type="checkbox"
                name="acessivel"
                checked={formData.acessivel}
                onChange={handleChange}
              />
              Evento Acessível (ex: para cadeirantes)
            </label>
          </div>
        </div>

        {/* Seção de Detalhes */}
        <div className={styles.secao}>
          <h2>Detalhes Adicionais</h2>

          <div className={styles.grupoForm}>
            <label>Nome da Pessoa:</label>
            <input
              type="text"
              name="nomePessoa"
              value={formData.nomePessoa}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.grupoForm}>
            <label>Contacto:</label>
            <input
              type="tel"
              name="contacto"
              value={formData.contacto}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.grupoForm}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.grupoForm}>
            <label>Link do Site (opcional):</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
          </div>

          <div className={styles.grupoForm}>
            <label>Foto do Evento (opcional):</label>
            <input
              type="file"
              name="foto"
              onChange={handleChange}
              accept="image/*"
            />
          </div>
        </div>

        <button type="submit" className={styles.botao}>
          Registrar Evento
        </button>
      </form>
    </div>
  );
}