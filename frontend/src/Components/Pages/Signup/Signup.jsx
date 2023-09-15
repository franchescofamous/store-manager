import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  let [nom, setNom] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  return (
    <div>
      <h1>Inscription</h1>
      <section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let user = { nom, password };
            console.log(user);
            axios
              .post("http://localhost:5000/user/signup", user)
              .then((res) => {
                console.log(res.data);
                navigate("/login");
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <h2>Remplissez le formulaire</h2>
          <label htmlFor="nom" id="nom">
            {" "}
            Nom:
          </label>
          <input
            type="text"
            id="nom"
            onInput={(e) => {
              setNom(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button type="submit">Valider</button>
        </form>
      </section>
    </div>
  );
};

export default Signup;
