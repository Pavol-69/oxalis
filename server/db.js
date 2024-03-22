const path = require("path");
const { app } = require("electron");
const fs = require("fs");

//'use strict';
const ADODB = require("node-adodb");
/*const connection = ADODB.open(
  "Provider=Microsoft.ACE.Oledb.12.0;Data Source=C:\\Users\\paulv\\OneDrive\\Bureau\\Informatique\\oxalis\\server\\testBDD.accdb;",
  process.arch.includes("64")
);*/

const connection = ADODB.open(
  `Provider=Microsoft.ACE.Oledb.12.0;Data Source=${
    app.isPackaged
      ? path.join(`${__dirname}/../../../../../BDD/testBDD.accdb`)
      : path.join(`${__dirname}/../../../server/testBDD.accdb`)
  };`,
  false
);
module.exports = connection;

/*

Spawn C:\Windows\System32\cscript.exe error

la vraie erreur 
Spawn C:\Windows\SysWOW64\cscript.exe error

if (app.isPackaged) {
      res.json(path.join(`${__dirname}/../../../../../BDD`));
    } else {
      res.json(path.join(`${__dirname}/../../../server`));
    }
*/
