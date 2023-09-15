const dataBase = require("../config/mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
exports.signup = (req, res) => {
  let insertUserQuery =
    "INSERT INTO `employe`(nom_employe,password_employe) VALUES(?,?)";
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      dataBase.query(insertUserQuery, [req.body.nom, hash], (error, result) => {
        if (error) {
          res.status(500).json({ error });
        }
        res.status(201).json(result);
      });
    })
    .catch((error) => {
      res.satus(500).json(error);
    });
  /* res.status(201).json({ message: " signup Successfully" }); */
};
exports.login = (req, res) => {
  let selectUserQuery = "SELECT * FROM `employe` where nom_employe= ?";
  dataBase.query(selectUserQuery, [req.body.nom], (error, result) => {
    if (error) {
      res.status(500).json(error);
    }
    if (result.length > 0) {
      bcrypt
        .compare(req.body.password, result[0].password_employe)
        .then((valid) => {
          if (valid) {
            let accessToken = jwt.sign(
              { idUser: result[0].id_employe },
              process.env.ACCESSTOKEN_SECRET,
              { expiresIn: "24h" }
            );
            res.status(200).json({ accessToken });
          } else {
            res.status(401).json({ message: "password incorrect" });
          }
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  });
  /* res.status(201).json({ message: "connecion reussi" }); */
};
