const dataBase = require("../config/mysql");
exports.getAllProduct = (req, res) => {
  dataBase.query("Select * from produit", (error, result) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.status(200).json({ result });
    }
  });
};

exports.addProduct = (req, res) => {
  console.log(req.headers);
  dataBase.query(
    "INSERT INTO produit (nom_produit,prix_vente_produit,prix_achat_produit,description_produit) VALUES (?,?,?,?)",
    [req.body.nom, req.body.prixV, req.body.prixA, req.body.desc],
    (error, result) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json({ id: result.insertId });
      }
    }
  );
};
