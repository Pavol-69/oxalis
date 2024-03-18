// CSS
import "../style/CSSGeneral.css";

// Component
import Header from "./Header"

// Autres
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Accueil({ }) {

 return (
    <div>
        <Header/>
    </div>
  );
}

export default Accueil;