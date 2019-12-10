const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('data_extraction.pdf');
let canvas = document.getElementById("the-canvas")
let context = canvas.getContext('2d')

 
pdf(dataBuffer).then(function(data) {
  console.log(data.text);
  info = data.text
}).catch(function(e){
  console.log("ERROR: ", e);
})

