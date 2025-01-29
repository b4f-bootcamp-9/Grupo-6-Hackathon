import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Navbar } from "./Inc/NavBar";
import { Footer } from "./Inc/Footer";
import { Eventos } from "./Pages/Eventos";
import { Contactos } from "./Pages/Contactos";
import { DetalhesEvento } from "./Pages/DetalhesEvento";
import { InscricaoEvento } from "./Pages/InscricaoEventos";
import { Login } from "./Pages/Login";



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/eventos" element={<Eventos/>} />
        <Route path="/eventos/:id" element={<DetalhesEvento />} />
        <Route path="/contactos" element={<Contactos/>} />
        <Route path="/inscrever" element={<InscricaoEvento/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </Router>
  </>
  );
}

export default App;
