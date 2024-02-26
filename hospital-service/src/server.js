const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const cors = require("cors");

const server = express()

server.use(morgan("dev"));
server.use(express.json());
server.use(cors(
    {
        origin: "*",
        methods: "GET,PUT,PATCH,HEAD,DELETED,POST",
        credentials: true,
    }
));

server.get("/", (req, res)=> {
    res.status(200).send("Server OK!!")
})

server.use(router)

module.exports = server;