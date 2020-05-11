import React from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import "./Header.css";

const Header = ({user,setUser}) => {
  return (
    <div>
      <header>
        <p> leboncoin </p>
        <p className="annonce"> Déposer une annonce </p>
        <span> Rechercher </span>

        {user === null ? (
          <Link to="/Log_in" className="Login">
            Se Connecter
          </Link>
        ) : (
          <button
           id ="FormDec"
             to="/Log_out"
            onClick={() => {
              // on se déconnectant
              // 1. Suppression du cookie userToken
              Cookie.remove("userToken");
              // 2. Mettre StateUser
              setUser(null);
              // 3. Aller sur la Page d'acceuil
            }}
          >
            Se Déconnecter
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
