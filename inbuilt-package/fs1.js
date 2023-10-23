//"FS" => File system  Commands are used here to create delete change files with the help of Node.....

const { error, log } = require("console");
const fs = require("fs");
/*const quote = "Everything Happens For A Reason ";

const [, , noOfFiles] = process.argv;
console.log(noOfFiles);

for (let i = 1; i <= noOfFiles; i++) {
  fs.writeFile(`Note-${i}.word`, quote, (err) => {
    console.log(`Completed Writing Note-${i}.word`);
  });
}
fs.readFile("./cool.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("ErrorXXX", err);
  }
  console.log("The file has => ", data);
});
// "readFile"  this helps to read the content of the file

const niceQuote = "\nMake Everyday a Little Less Ordinarily ";
//** "\n" this command helps the sentence to move to the next line , and it can be used in command as well as Quote ...**

fs.writeFile("Nice.txt", niceQuote, (err) => {
  console.log("Completed Writing  nice.txt");
});
// "writeFile" helps to create file And also helps to overwrite the existing File.......

fs.appendFile("Nice.txt", niceQuote, (err) => {
  console.log("Completed Writing  nice.txt");
});
// "appendFile" helps to concatenate(combine) with the existing file.....

fs.unlink("./Remove.txt", (err) => {
  console.log("Deleted Successfully");
});
// "unlink" this helps to delete the mentioned file......
const { error, log } = require("console");
const fs = require("fs");
const NiceQuote2 = "When You Are in Trouble Feel The Pain ";
for (let i = 1; i <= 10; i++) {
  fs.writeFile(`./All Files/Note${i}.html`, NiceQuote2, (err) => {
    console.log(`Completed Writing Note${i}.html`);
  });
} 
// Creating file inside the folder with the help of writeFile....

fs.readdir("./All Files", (err, data) => {
  console.log(data);
});*/
// "readdir" helps to view the bulk file in string method in Terminal.....

fs.readdir("./All Files", (err, data) => {
  data.forEach((FileName) => {
    fs.unlink(`./All Files/${FileName}`, (err) => {
      console.log("Deleted Successfully", FileName);
    });
  });
});
// deleting bulk files using use bracket......

//fs.writeFile , fs.readFile , fs.appendFile , fs.unlink => Async
//fs.writeSync , fs.readFileSync , fs.appendFileSync ,fs.unlinkSync => Sync
