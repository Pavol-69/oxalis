// CSS
import "./style/CSSGeneral.css";

// Component
import Accueil from "./component/Accueil";
import CreationDossier from "./component/CreationDossier";
import ExportExcel from "./component/ExportExcel";

// Autre
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/main_window" element={<Accueil />} />
          <Route path="/creation_dossier" element={<CreationDossier />} />
          <Route path="/export_excel" element={<ExportExcel />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
