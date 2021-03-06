const fs = require("fs")
var sdk = "#pragma once\n\n//Fortnite SDk Gen Made By Jacobb626\n#include <set>\n#include <locale>\n#include <string>\n\n"

console.log("Sdk Gen made by Jacobb626")

fs.readdirSync(`${__dirname}/SDK`).forEach(fct => {
    sdk = sdk + `#include "SDK/${fct}"\n`
})

fs.writeFileSync(`${__dirname}/SDK.hpp`, sdk)

console.log("Done!")