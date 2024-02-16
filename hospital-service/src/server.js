const express = require("express");
const morgan = require("morgan");

const server = express()

server.use(morgan("dev"));
server.use(express.json());

server.get("/", (req, res)=> {
    res.status(200).send("Server OK!!")
})

module.exports = server;