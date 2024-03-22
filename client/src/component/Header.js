// CSS
import "../style/CSSGeneral.css";
import "../style/Header.css";

// Autres
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header({}) {
  return (
    <div className="elm_ct ligne">
      <Link className="btn elm_ct" to="/">
        Accueil
      </Link>
      <Link className="btn elm_ct" to="/creation_dossier">
        Création Dossier
      </Link>
      <Link className="btn elm_ct" to="/export_excel">
        Exportation Excel
      </Link>
    </div>
  );
}

export default Header;
