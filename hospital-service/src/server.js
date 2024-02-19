const express = require("express");
const morgan = require("morgan");
const router = require("./routes")

const server = express()

server.use(morgan("dev"));
server.use(express.json());

server.get("/", (req, res)=> {
    res.status(200).send("Server OK!!")
})

server.use(router)

module.exports = server;