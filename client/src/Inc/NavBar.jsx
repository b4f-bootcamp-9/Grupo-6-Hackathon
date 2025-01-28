import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/NavBar.css";

export function Navbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleEventosClick = () => {
    navigate("/eventos");
  };
  const handleContactosClick = () => {
    navigate("/contactos");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/Images/logo.png"
          alt="Logo Principal"
          className="logo"
          onClick={handleHomeClick}
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/eventos" onClick={handleEventosClick}>
            Eventos
          </a>
        </li>
        <li>
          <a href="/contactos" onClick={handleContactosClick}>
            Contactos
          </a>
        </li>
      </ul>
      
    </nav>
  );
}
