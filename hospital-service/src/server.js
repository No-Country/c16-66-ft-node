const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { conn } = require("./db");
const passport = require("passport");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routes");
require("dotenv").config();

const { initializePassport } = require("../src/config/passport.config");

const server = express();
const { DB_PASSWORD } = process.env;

const sessionStore = new SequelizeStore({
  db: conn,
  expiration: 30 * 60 * 1000,
});

server.use(
  session({
    store: sessionStore,
    secret: DB_PASSWORD,
    resave: false,
    saveUninitialized: false,
  })
);

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(passport.session());
initializePassport();
server.use(passport.initialize());

server.get("/", (req, res) => {
  res.status(200).send("Server OK!!");
});

server.use(router);

module.exports = server;
