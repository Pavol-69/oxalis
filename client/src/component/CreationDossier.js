// CSS
import "../style/CSSGeneral.css";

// Component
import Header from "./Header"

// Autres
import React, { useState, useEffect } from "react";

function CreationDossier({ }) {

    const [fldName, setFldName] = useState("")
    const [fldPath, setFldPath] = useState("")

    async function test(e) {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/test/test1", {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          });
          
          const parseRes = await response.json();
          
          console.log(parseRes);
      
        } catch (err) {
          console.error(err.message);
        }
      }
      
      function myOnChg(e) {
        e.preventDefault();
        setFldName(e.target.value)
      }
      
      async function choseFld(e) {
        e.preventDefault(e);
        const dialogConfig = {
          title: 'Select a file',
          buttonLabel: 'This one will do',
          properties: ['openDirectory']
        };
        electron.openDialog('showOpenDialog', dialogConfig)
        .then(result => {
          setFldPath(result.filePaths[0]);
        });
        
      }
      
      function crtFld(e) {
        e.preventDefault(e);
        if(fldPath===""){
          alert("Dossier à choisir")
        } else {
          if(fldName===""){
            electron.createFolder(`${fldPath}\\Nouveau Dossier`)
          } else {
            electron.createFolder(`${fldPath}\\${fldName}`)
          }
        }
        /*electron.createFolder('showOpenDialog')
        .then(result => {
          console.log(result);
        });*/
      }
      
      return (
        <div>
        <Header/>
        <div className="btn elm_ct" onClick={(e) => test(e)}>Bouton test back</div>
        <p/>
        <div>Nom du dossier à créer</div>
        <input onChange={(e) => myOnChg(e)} value={fldName}/>
        <p/>
        <div className="btn elm_ct" onClick={(e) => choseFld(e)}>Choisir un dossier</div>
        <p/>
        <div>Dossier choisi :</div>
        <div>{fldPath===""?"Aucun dossier choisi":fldPath}</div>
        <p/>
        <div className="btn elm_ct" onClick={(e) => crtFld(e)}>Créer le dossier</div>
    </div>
  );
}

export default CreationDossier;