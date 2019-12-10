const fs = require('fs')
import {readFileSync } from 'fs'
// const pdf = require('pdf-parse')
let dataBuffer = fs.readFileSync("data_extraction.pdf")
console.log(dataBuffer)

// pdf(dataBuffer).then(function (data) {
//   console.log(data.text) 
// })


