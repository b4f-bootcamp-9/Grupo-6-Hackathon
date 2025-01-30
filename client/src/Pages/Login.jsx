import React, { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

export function Login() {
      const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "gestao@distritovivo.pt",
        password: "passworddeteste",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados de login:", formData);
    };

    const handleLoginClick = () => {
        navigate("/verificar");
      };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-logo">
                    <img src="/Images/logo.png" alt="Logo do Site" />
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Passe:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="button"onClick={handleLoginClick}>Login</button>
                </form>
            </div>
        </div>
    );
}
