  
const util = require("util")

const fs = require("fs")

const f = util.promisify(fs.readFile)

const testi = ["./testo1.txt","./testo2.txt","./testo3.txt","./testo4.txt"]

const promise = Promise.all([
    f(testi[0])
    .then((data) => data.toString()),
    .catch((err => consol.log("non sono riuscito a leggere il file")),

    f(testi[1]).then((data) => data.toString()),
    .catch((err => consol.log("non sono riuscito a leggere il file")),

    f(testi[2]).then((data) => data.toString())
    .catch((err => consol.log("non sono riuscito a leggere il file")),

    f(testi[3]).then((data) => data.toString())
    .catch((err => consol.log("non sono riuscito a leggere il file")),

])
.then((results) => console.log("ecco : "+results[0].value+"   "+results[1].value+"   "+results[2].value + "   "results[3].value)),
.catch(err => consol.log("non sono riuscito a comporre il file")),
