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

server.use(morgan("dev"));

const ACCEPTED_ORIGINS = [
  "http://localhost:8080",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5173",
  "https://65eb559cc1caadcd7924f097--cerulean-kangaroo-60f8e4.netlify.app",
  "https://c16-66-ft-node.onrender.com",
];

server.use(
  cors({
    origin: (origin, callback) => {
      if (ACCEPTED_ORIGINS.includes(origin)) {
        callback(null, true); // Origin permitido
      } else if (!origin) {
        callback(null, false); // No se proporcionó un origen (puede ser una solicitud CORS simple)
      } else {
        callback(new Error("Not permitted by CORS")); // Origin no permitido
      }
    },
    credentials: true,
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());

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
      sameSite: "none",
    },
  })
);

sessionStore.sync();

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

// server.use(morgan("dev"));
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));
// server.use(bodyParser.json());
// server.use(cookieParser());

// sessionStore.sync();

server.get("/", (req, res) => {
  res.status(200).send("Server OK!!");
});

server.use((req, res, next) => {
  const origin = req.header("origin");
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,HEAD,DELETE,POST");
  next();
});

server.use(router);

module.exports = server;
