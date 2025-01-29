import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Sobre Nós</h4>
                    <p>
                    Somos uma empresa que centraliza informações sobre eventos locais,
                    conectando a comunidade e garantindo que você nunca perca atividades interessantes na sua região.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Links Úteis</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/eventos">Eventos</a></li>
                        <li><a href="/contactos">Contactos</a></li>
                        <li><a href="/inscrever">Inscrever um evento</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contactos</h4>
                    <p>Email: geral@distritovivo.pt</p>
                    <p>Telefone: (+351) 987 654 321</p>
                </div>
                {/* <div className="footer-section">
                    <h4>Siga-nos</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> 
                        <a href="https://bsky.app" target="_blank" rel="noopener noreferrer">BlueSky</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div> */}
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}
