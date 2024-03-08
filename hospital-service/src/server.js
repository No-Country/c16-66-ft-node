const express = require("express");
const cors = require("cors");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { conn } = require("./db");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const router = require("./routes");
require("dotenv").config();

const { initializePassport } = require("../src/config/passport.config");

const server = express();
const { DB_PASSWORD } = process.env;

server.use(cors());

const sessionStore = new SequelizeStore({
  db: conn,
});

server.use(
  session({
    store: sessionStore,
    secret: DB_PASSWORD,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 30 * 60 * 1000,
      expires: new Date(Date.now() + 30 * 60 * 1000),
    },
  })
);

// server.use(
//   cors({
//     origin: "*",
//     methods: "GET,PUT,PATCH,HEAD,DELETE,POST",
//     credentials: true,
//   })
// );

initializePassport();

// Middleware de Passport
server.use(passport.initialize());
server.use(passport.session());

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());

sessionStore.sync();

server.options("/tokenB", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
});

server.options("/session", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
});

server.get("/", (req, res) => {
  res.status(200).send("Server OK!!");
});

server.use(router);

module.exports = server;
