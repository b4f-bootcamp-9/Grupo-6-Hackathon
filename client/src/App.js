import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ResgistoDeEvento } from "./Pages/ResgistoDeEventoPage";
import {RegistarEventoPage} from "./Pages/RegistarEventoPage";

function App() {
  return (
    <Router>
    

    <Routes>
      <Route path="/" element={<ResgistoDeEvento />} />
      <Route path="/RegistarEventoPage" element={<RegistarEventoPage />} />

    </Routes>
  </Router>
  );
}

export default App;
