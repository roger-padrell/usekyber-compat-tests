var kyb = require("js-kyber")
var fs = require('node:fs')

let preset_kyb = fs.readFileSync("preset_kyber.txt");
let preset_message = fs.readFileSync("preset_message.txt");

// Creates a kyber object with random keys and public tables
let k = kyb.importFullKyber(preset_kyb);
let m = kyb.importMessage(preset_message);

let d = kyb.recieveString(k, m);

let testValue = "test"

if(d != testValue){
    throw new Error("Assertion error. Expected '" + testValue + "', got '" + d + "'");
}

else{
    console.log("Test succeed")
}