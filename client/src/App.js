import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegistarEventoPage } from "./Pages/RegistarEventoPage";


function App() {
  return (
    <Router>
    

    <Routes>
      <Route path="/" element={<RegistarEventoPage />} />

    </Routes>
  </Router>
  );
}

export default App;
