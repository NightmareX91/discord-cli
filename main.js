try {
    var discord = require("discord.js");
}
catch (e) {
    console.log("Please run npm install and ensure it passes with no errors!");
    process.exit();
}

try {
    var auth = require("./auth.json");
}
catch (e) {
    console.log("Please create an auth.json! Check github for an example.");
    process.exit();
}

var ds = new discord.Client();

ds.on("ready", function () {
    console.log("Connected!");
});

ds.on("disconnected", function () {
    console.log("Disconnected!");
    process.exit(1);
});

ds.on("message", function (msg) {
    if (msg.channel.server.name == "WAYT") {
        console.log(msg.channel.server.name + "@" + msg.channel.name + ": " + msg.content);
    }
});

ds.login(auth.username, auth.password);
