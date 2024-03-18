// CSS
import "./src/style/CSSGeneral.css"

// Component
import Accueil from "./src/component/Accueil"
import CreationDossier from "./src/component/CreationDossier"
import ExportExcel from "./src/component/ExportExcel"

// Autre
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route
            path="/main_window"
            element={<Accueil/>}
          />
          <Route
            path="/creation_dossier"
            element={<CreationDossier/>}
          />
          <Route
            path="/export_excel"
            element={<ExportExcel/>}
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
