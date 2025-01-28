import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Navbar } from "./Inc/NavBar";
import { Footer } from "./Inc/Footer";
import { Eventos } from "./Pages/Eventos";
import { Contactos } from "./Pages/Contactos";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/eventos" element={<Eventos/>} />
        <Route path="/contactos" element={<Contactos/>} />
      </Routes>
      <Footer />
    </Router>
  </>
  );
}

export default App;
