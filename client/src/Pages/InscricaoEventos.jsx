import React, { useState } from "react";
import "../Styles/InscricaoEventos.css";

export function InscricaoEvento() {
  const [formData, setFormData] = useState({
    imagem: "",
    nomeEvento: "",
    descricao: "",
    data: "",
    tipo:"",
    acessivel:false,
    preco: false,
    concelho: "",
    morada:"",
    website: "",
    nomeResponsavel: "",
    email: "",
    contacto: "",
  });

  const requestOptions = {
    method: "POST",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({ formData }),
  };

  const fetchData = () => {
    fetch(`http://localhost:3001/api/eventos`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    
    
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    
  };

  const handlePago = () => {
    setFormData((prevData) => {
      if (prevData.preco === true) {
        return { ...prevData, preco: false };
      } else {
        return { ...prevData, preco: true };
      }
    });
  };


  const handleAcessibilidade = () => {
    setFormData((prevData) => {
      if (prevData.acessivel === true) {
        return { ...prevData, acessivel: false };
      } else {
        return { ...prevData, acessivel: true };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    fetchData();
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="inscricao-evento-page">
      <h1 className="inscricao-evento-title">Inscrição para Eventos</h1>
      <form className="inscricao-evento-form" onSubmit={handleSubmit}>
        <label htmlFor="imagem">Imagem do Evento:</label>
        <input type="file" id="imagem" name="imagem" onChange={handleChange} />

        <label htmlFor="nomeEvento">Nome do Evento:</label>
        <input
          type="text"
          id="nomeEvento"
          name="nomeEvento"
          value={formData.nomeEvento}
          onChange={handleChange}
          required
        />

      

        <label htmlFor="descricao">Descrição:</label>

        <textarea id="descricao" name="descricao" onChange={handleChange} value={formData.descricao} rows="4" cols="50"/>

        <label htmlFor="categoria">Categoria:</label>
        <select
          id="categoria"
          name="tipo"
          value={formData.categoria}
          onChange={handleChange}
          required
        >
          <option >Selecionar</option>
          <option value="Gastronomia">Gastronomia</option>
          <option value="Ar Livre">Ar Livre</option>
          <option value="Musica">Musica</option>
          <option value="Teatro">Teatro</option>
          <option value="Tradicional">Tradicional</option>
          <option value="Tecnologia">Tecnologia</option>
          
        </select>

        <label htmlFor="data">Data:</label>
        <input
          type="date"
          id="data"
          name="data"
          value={formData.data}
          onChange={handleChange}
          required
        />

        <fieldset>
          <legend>Extras do Evento:</legend>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="pago"
              name="pago"
              checked={formData.preco}
              onChange={handlePago}
            />
            <label htmlFor="pago">Pago?</label>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="acessivel"
              name="acessivel"
              checked={formData.acessivel}
              onChange={handleAcessibilidade}
            />
            <label htmlFor="acessivel">
              Acessível para necessidades especiais?
            </label>
          </div>
        </fieldset>

        {/* {formData.preco && (
          <>
            <label htmlFor="preco">Se for pago, quanto será:</label>
            <input
              type="number"
              id="preco"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              required={formData.preco}
            />
          </>
        )} */}
          <label htmlFor="morada">Morada:</label>
        <input
          type="text"
          id="morada"
          name="morada"
          value={formData.morada}
          onChange={handleChange}
          required
        />

        <label htmlFor="concelho">Concelho:</label>
        <select
          id="concelho"
          name="concelho"
          value={formData.concelho}
          onChange={handleChange}
          required
        >
          <option value="">Selecionar</option>
          <option value="Lisboa">Lisboa</option>
          <option value="Amadora">Amadora</option>
          <option value="Oeiras">Oeiras</option>
          <option value="Sintra">Sintra</option>
          <option value="Cascais">Cascais</option>
          <option value="Loures">Loures</option>
          <option value="Mafra">Mafra</option>
          <option value="Odivelas">Odivelas</option>
          <option value="Vila Franca de Xira">Vila Franca de Xira</option>
          <option value="Torres Vedras">Torres Vedras</option>
          <option value="Sobral de Monte Agraço">Sobral de Monte Agraço</option>
          <option value="Alenquer">Alenquer</option>
          <option value="Cadaval">Cadaval</option>
          <option value="Arruda dos Vinhos">Arruda dos Vinhos</option>
          <option value="Lourinhã">Lourinhã</option>
          <option value="Bombarral">Bombarral</option>
        </select>

        <label htmlFor="website">Website:</label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />

        <label htmlFor="nomeResponsavel">Nome do Responsavel:</label>
        <input
          type="text"
          id="nomeResponsavel"
          name="nomeResponsavel"
          value={formData.nomePessoa}
          onChange={handleChange}
          required
        />

        <label htmlFor="gmail">Email do Responsavel:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="contacto">Contacto do Responsavel:</label>
        <input
          type="tel"
          id="contacto"
          name="contacto"
          value={formData.contacto}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>

      {isSubmitted && (
        <div className="popup">
          <div className="popup-content">
            <h3>Obrigado!</h3>
            <p>A sua inscrição foi enviada com sucesso.</p>
            <p>Iremos analisar e assim que possivél, entraremos em contato.</p>
            <button onClick={closePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
