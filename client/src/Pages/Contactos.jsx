import React, { useState } from "react";
import "../Styles/Contactos.css";

export function Contactos() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const closePopup = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="contactos-page">
            <h1 className="contactos-title">Contacte-nos</h1>
            <p className="contactos-intro">Tem alguma questão ou sugestão? Fale connosco através do formulário abaixo ou utilizando as informações de contacto fornecidas.</p>
            
            <div className="contactos-content">
                <div className="contactos-info">
                    <h2>Informações de Contacto</h2>
                    <p><strong>Email:</strong> geral@distritovivo.pt</p>
                    <p><strong>Telefone:</strong> (+351) 932 212 341</p>
                    <p><strong>Morada:</strong> Rua Padre Alberto Neto, 2725-531 Algueirão-Mem Martins</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://bsky.app" target="_blank" rel="noopener noreferrer">BlueSky</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>

                <div className="contactos-form">
                    <h2>Envie-nos uma Mensagem</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>

            {isSubmitted && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Obrigado!</h3>
                        <p>A sua mensagem foi enviada com sucesso. Responderemos o mais breve possível.</p>
                        <button onClick={closePopup}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
