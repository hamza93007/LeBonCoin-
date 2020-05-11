import React from "react";
import "./login.css";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";

const Login = ({setUser}) => {
    const history = useHistory();
  return (
    <div className="FormLogin">
      <h2> Connexion </h2>
      <hr />
      <p> Adresse Email : </p>
      <input
        type="text" value="" placeholder=" Votre Adresse Email SVP " />
      <br />

      <p> Mot de Passe : </p>

      <input type="text" value="" placeholder=" Votre Mot de Passe SVP " />
      <br />

      <button className="ButtonLogin1"
       onClick={()=> {
          // appeler le serveur pour transmettre un Token ( requéte axios )
          const token="1234";

          // Sauvegarder le token dans le Cookie
           Cookie.set("userToken", token, {expires:7}) ;
            setUser({
              token:token
            })

          // aller sur la page d'acceuil
          history.push('/');
      }}

      > Se Connecter </button>
      <hr />

      <p> Vous n'avez pas de Compte ? </p>

      <button className="ButtonLogin"
        onClick={()=> {
          history.push("/Sign_up");
      }}
      > Créer un compte </button>  
    </div>
  );
};

export default Login;
