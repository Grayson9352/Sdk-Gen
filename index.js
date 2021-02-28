const fs = require("fs")
var sdk = ""

console.log("Sdk Gen made by Jacobb626")
console.log("Making Sdk Functions")

fs.readdirSync(`${__dirname}/SDK`).forEach(fct => {
    sdk = sdk + `#include "${fct}"\n`
})

fs.writeFileSync(`${__dirname}/SdkFunctions.txt`, sdk)

console.log("Done!")