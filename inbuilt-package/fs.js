const { error } = require("console");
const fs = require("fs");
const quote = "Where There Is A will There Is A Way ";
fs.writeFile("Awesome.word", quote, (err) => {
  console.log("Completed Writing  Awesome.html");
});
