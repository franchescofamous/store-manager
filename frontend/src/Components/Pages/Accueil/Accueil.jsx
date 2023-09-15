import { useEffect, useState } from "react";
import styles from "../../../styles/css/Acceuill.module.css";
import usePrivateAxios from "../../../Hooks/usePrivateAxios";

const Accueil = () => {
  const axiosPrivate = usePrivateAxios();
  let [nom, setNom] = useState();
  let [prixV, setPrixV] = useState();
  let [prixA, setPrixA] = useState();
  let [desc, setDesc] = useState();
  let [productList, setProductList] = useState();
  let [newProductId, setnewProductId] = useState();

  useEffect(() => {
    axiosPrivate
      .get("http://localhost:5000/product/select")
      .then((res) => {
        console.log(res);
        setProductList(res.data.result);
      })
      .catch((error) => console.log(error));
  }, [newProductId]);

  return (
    <div className={styles.container}>
      <section className={styles.product}>
        <section className={styles.product__add}>
          <button className={"btn btn--wide"}>Ajouter Nouveau produit </button>

          <article className={styles.product__add__form}>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                let data = { nom, prixA, prixV, desc };
                console.log(data);
                axiosPrivate
                  .post("/product/add", { ...data })
                  .then((res) => {
                    console.log(res.data);

                    setnewProductId(res.data.id);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <div>
                <label htmlFor="nom">Nom du produit:</label>
                <br />
                <input
                  type="text"
                  id="nom"
                  onBlur={(e) => {
                    setNom(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="prixA">Prix d'achat: </label>
                <br />
                <input
                  type="number"
                  id="prixA"
                  onBlur={(e) => {
                    setPrixA(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="prixV">Prix de vente: </label>
                <br />
                <input
                  type="number"
                  id="prixV"
                  onBlur={(e) => {
                    setPrixV(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="description">Description du produit : </label>
                <br />
                <input
                  type="text"
                  id="description"
                  onBlur={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              <div>
                <button type="submit">Valider</button>
              </div>
            </form>
          </article>
        </section>
        <section>
          {productList &&
            productList.map((product) => {
              return <h2 key={product.id_produit}> {product.nom_produit} </h2>;
            })}
        </section>
      </section>
    </div>
  );
};

export default Accueil;
