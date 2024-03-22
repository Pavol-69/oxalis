//'use strict';
const ADODB = require("node-adodb");
/*const connection = ADODB.open(
  "Provider=Microsoft.ACE.Oledb.12.0;Data Source=C:\\Users\\paulv\\OneDrive\\Bureau\\Informatique\\oxalis\\server\\testBDD.accdb;",
  process.arch.includes("64")
);*/
const connection = ADODB.open(
  "Provider=Microsoft.ACE.Oledb.12.0;Data Source=D:\\DevWeb\\oxalis\\server\\testBDD.accdb;",
  false
);
module.exports = connection;
