const os = require("os");

console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024);
console.log("Total Memory", os.totalmem() / 1024 / 1024 / 1024);
//1 kb => 1024 bytes ; 1 mb =>1024 kb ; 1 gb =>1024 mb
console.log("Os Version", os.version());
console.log("Os platform", os.platform());
console.log("processor", os.cpus());
console.log("user info", os.userInfo());
console.log(`Processor , $ {os.cpus().length} Core`);
console.log("Uptime", os.uptime());
console.log("Arch", os.arch());
console.log("Type", os.type());
console.log("Directory", os.tmpdir);
console.log("Host", os.hostname());
console.log("Network", os.networkInterfaces());
console.log("Machine", os.machine());
