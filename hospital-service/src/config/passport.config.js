const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { Pacient, Doctor } = require("../db");

const jwt = require("passport-jwt");
const dotenv = require("dotenv");

dotenv.config();

const initializePassport = () => {
  passport.use(
    "registerPacient",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, username, password, done) => {
        const {
          name,
          lastname,
          birthdate,
          dni,
          cuil,
          image,
          adress,
          town,
          province,
          country,
          tel,
          socialSecurity,
          planSocialSecurity,
        } = req.body;

        try {
          const exists = await Pacient.findOne({
            where: {
              email: username,
            },
          });

          if (exists) {
            return done(null, false);
          }

          const newPacient = await Pacient.create({
            name,
            lastname,
            birthdate,
            email: username,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
            dni,
            cuil,
            image,
            adress,
            town,
            province,
            country,
            tel,
            socialSecurity,
            planSocialSecurity,
          });

          return done(null, newPacient);
        } catch (err) {
          console.error(err.message);
          return done(err);
        }
      }
    )
  );
  passport.use(
    "registerDoctor",
    new LocalStrategy(
      { passReqToCallback: true, usernameField: "email" },
      async (req, username, password, done) => {
        const {
          name,
          lastname,
          birthdate,
          dni,
          cuil,
          adress,
          town,
          province,
          country,
          telephone,
          licensenumber,
          specialty,
          socialSecurity,
          registrationNumber,
          image,
        } = req.body;

        try {
          const exists = await Doctor.findOne({
            where: {
              email: username,
            },
          });

          if (exists) {
            console.log("Doctor already registered with this email");
            return done(null, false, {
              message: "Doctor already registered with this email",
            });
          }

          const newDoctor = await Doctor.create({
            name,
            lastname,
            birthdate,
            email: username,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
            dni,
            cuil,
            adress,
            town,
            province,
            country,
            telephone,
            socialSecurity,
            registrationNumber,
            licensenumber,
            specialty,
            image,
          });

          return done(null, newDoctor);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.use(
    "loginPacient",
    new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        try {
          const user = await Pacient.findOne({
            where: {
              email: username,
            },
          });

          if (!user) {
            return done(null, false);
          }

          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false);
          }

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.use(
    "loginDoctor",
    new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        try {
          const user = await Doctor.findOne({
            where: {
              email: username,
            },
          });

          if (!user) {
            return done(null, false);
          }

          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false);
          }

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    let userType;
    let userId;

    if (user instanceof Pacient) {
      userType = "Pacient";
      userId = user.pacientId;
    } else if (user instanceof Doctor) {
      userType = "Doctor";
      userId = user.doctorId;
    } else{
      userType = "Admin"
    }

    done(null, { userType, userId });
  });

  passport.deserializeUser(async ({ userType, userId }, done) => {
    try {
      let user;
      if (userType === "Pacient") {
        user = await Pacient.findByPk(userId);
      } else if (userType === "Doctor") {
        user = await Doctor.findByPk(userId);
      }
      done(null, user);
    } catch (err) {
      console.error(err.message);
      done(err);
    }
  });
};

module.exports = { initializePassport };
