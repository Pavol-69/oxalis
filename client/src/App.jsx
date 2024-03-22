// CSS
import "./style/CSSGeneral.css";

// Component
import Accueil from "./component/Accueil.js";
import CreationDossier from "./component/CreationDossier.js";
import ExportExcel from "./component/ExportExcel.js";

// Autre
import * as React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
//import { BrowserRouter } from "react-router-dom";

/*const root = createRoot(document.body);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/main_window" element={<Accueil />} />
        <Route path="/creation_dossier" element={<CreationDossier />} />
        <Route path="/export_excel" element={<ExportExcel />} />
      </Routes>
    </Router>
  </React.StrictMode>
);*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/creation_dossier" element={<CreationDossier />} />
        <Route path="/export_excel" element={<ExportExcel />} />
      </Routes>
    </Router>
  );
}

// Ca, ça marche
/*function App() {
  return <div>toto</div>;
}*/

/*const root = createRoot(document.body);
root.render(<CreationDossier />);*/

export default App;
