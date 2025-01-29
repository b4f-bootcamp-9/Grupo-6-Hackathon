import React, { useState } from "react";
import "../Styles/InscricaoEventos.css";

export function InscricaoEvento() {
    const [formData, setFormData] = useState({
        imagem: "",
        nomeEvento: "",
        data: "",
        tipoEvento: {
            pago: false,
            gratuito: false,
            acessivel: false,
        },
        preco: "",
        concelho: "",
        website: "",
        nomePessoa: "",
        gmail: "",
        contacto: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                tipoEvento: {
                    ...prevData.tipoEvento,
                    [name]: checked,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
        setIsSubmitted(true);
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
                <input type="text" id="nomeEvento" name="nomeEvento" value={formData.nomeEvento} onChange={handleChange} required />

                <label htmlFor="data">Data:</label>
                <input type="date" id="data" name="data" value={formData.data} onChange={handleChange} required />

                <fieldset>
                    <legend>Tipo de Evento:</legend>
                    <div className="checkbox-container">
                        <input type="checkbox" id="pago" name="pago" checked={formData.tipoEvento.pago} onChange={handleChange} />
                        <label htmlFor="pago">Pago?</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" id="gratuito" name="gratuito" checked={formData.tipoEvento.gratuito} onChange={handleChange} />
                        <label htmlFor="gratuito">Gratuito?</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" id="acessivel" name="acessivel" checked={formData.tipoEvento.acessivel} onChange={handleChange} />
                        <label htmlFor="acessivel">Acessível para necessidades especiais?</label>
                    </div>
                </fieldset>

                {formData.tipoEvento.pago && (
                    <>
                        <label htmlFor="preco">Se for pago, quanto será:</label>
                        <input type="number" id="preco" name="preco" value={formData.preco} onChange={handleChange} required={formData.tipoEvento.pago} />
                    </>
                )}

                <label htmlFor="concelho">Concelho:</label>
                <select id="concelho" name="concelho" value={formData.concelho} onChange={handleChange} required>
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
                <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} />

                <label htmlFor="nomePessoa">Nome da Pessoa:</label>
                <input type="text" id="nomePessoa" name="nomePessoa" value={formData.nomePessoa} onChange={handleChange} required />

                <label htmlFor="gmail">Gmail:</label>
                <input type="email" id="gmail" name="gmail" value={formData.gmail} onChange={handleChange} required />

                <label htmlFor="contacto">Contacto:</label>
                <input type="tel" id="contacto" name="contacto" value={formData.contacto} onChange={handleChange} required />

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
