import React from "react";
import { useState, useContext } from "react";
import axios from "../../../Api/axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContextProvider";
const Login = () => {
  const navigate = useNavigate("");
  let [nom, setNom] = useState("");
  let [password, setPassword] = useState("");
  let { auth, setAuth } = useContext(UserContext); //{ auth, setAuth }
  //let MonContext = useContext(UserContext) MonContext.auth
  //{token: "hjklmlkjhgf",nom: }
  return (
    <div>
      <h1>Connexion</h1>
      <section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let user = { nom, password };
            console.log(user);

            axios
              .post("/user/login", user)
              .then((res) => {
                console.log(res.data);
                setAuth((prevState) => {
                  return { ...prevState, token: res.data.accessToken };
                });
                navigate("/");
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <h2>Veuillez vous connectez</h2>
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

export default Login;
