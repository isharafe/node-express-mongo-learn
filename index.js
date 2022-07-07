// import express
const express = require("express");


// create an express app. this is the server.
const app = express();

app.get("/", (req, res)=> {
    return res.send("Hello Node World !");
});

// get port from env file or use 3000 as default
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is running");
});

// TODO: where does "module" comes from? => check "CommonJS" for more details
// https://stackify.com/node-js-module-exports/#:~:text=Module%20exports%20are%20the%20instruction,to%20access%20the%20exported%20code.
module.exports = app;