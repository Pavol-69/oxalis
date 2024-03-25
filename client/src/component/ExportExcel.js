// CSS
import "../style/CSSGeneral.css";

// Component
import Header from "./Header";

// Autres
import React, { useState, useEffect } from "react";

function ExportExcel({}) {
  async function testBdd(e) {
    e.preventDefault(e);
    try {
      let myBDD = electron.bdd("toto");
      //const user = await myBDD.query("SELECT * FROM testDB");
      console.log("toto");
      console.log(myBDD);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <Header />
      <div className="btn elm_ct" onClick={(e) => testBdd(e)}>
        Test BDD
      </div>
    </div>
  );
}

export default ExportExcel;
