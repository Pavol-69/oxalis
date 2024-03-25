const path = require("path");
const { app } = require("electron");

//'use strict';
const ADODB = require("node-adodb");

const connection = ADODB.open(
  `Provider=Microsoft.ACE.Oledb.12.0;Data Source=${
    app.isPackaged
      ? path.join(`${__dirname}/../../../../../BDD/testBDD.accdb`)
      : path.join(`${__dirname}/../../../client/out/BDD/testBDD.accdb`)
  };`,
  false
);
module.exports = connection;

/* l'erreur 
Spawn C:\Windows\SysWOW64\cscript.exe error
*/
