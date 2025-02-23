let k = require("./index.js")

var bk = k.createRandomKyber();
var bs = k.createMessageSender(bk.publicTable, bk.publicKeys);

let testValue = "test"
var m = k.sendString(bs, testValue);

var res =  k.recieveString(bk,m) 

if(res != testValue){
    throw new Error("Assertion error. Expected '" + testValue + "', got '" + res + "'");
}
else{
    console.log("Test succeed")
}