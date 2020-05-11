import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom";



const SignUp = ({setUser}) => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [MotPasse, setMotPasse] = useState("");
  const [ConfirmMP, setConfirmMP] = useState("");
  const [checkbox, setcheckBox] = useState(false);

  const history = useHistory();

const handleChangeSubmit = async (event) => {
    event.preventDefault();

    // password et confirmPassword sont identiques 

    if (checkbox) { 
      if (MotPasse === ConfirmMP) { 
        // faire une requête vers le serveur pour créer un user 

         const response =  axios.post( 
          "https://leboncoin-api.herokuapp.com/user//Sign_up", 
          { 
            email: email, 
            username: pseudo, 
            password: MotPasse, 
          } 
        );
        // console.log(response.data);
        // reception d'un token
        // le stocker dans un cookie
        Cookie.set("userToken", response.data.token, { expires: 2000 });
        setUser(response.data.token);

        // rediriger le user vers la home page
        history.push("/");

      } else {
        alert("Vos mots de passe ne sont pas indentiques"); }
    } else {
      alert("Veuillez accepter les CGU et CGV");
    }
  };


  return (
    <div className="Box1">
      <div>
        <h2> Pourquoi créer un Compte ? </h2> <br /> <br />
        <h3> Gagnez du Temps </h3>
        <p>
          Publiez vos annonces rapidement, avec vos informations pré-remplies
          chaque fois que vous souhaitez déposer une nouvelle annonce.
        </p>
        <br /> <br />
        <h3> Soyez les premiers informés </h3> <br />
        <p>
          Créez des alertes Immo ou Emploi et ne manquez jamais l'annoce qui vs
          intéresse.
        </p>
        <br /> <br />
        <h3> Visibilité </h3> <br />
        <p>
          Suivez les stastiques de vos annonces (nombre de fois ou votre annonce
          a été vue, nombre de contact recus. )
        </p>
        <br /> <br />
      </div>

      {/* ----------------- Création d'un Compte --------------------- */}

      <div>
        <form onSumbit={(handleChangeSubmit)}>
          <h2> Créer un Compte </h2>
          <br />

          <h3> Pseudo * </h3>
          <input type="text" value={pseudo} onChange={(event) => {
              const value=event.target.value;
              setPseudo(value);
          }} />
          <br />

          <h3> Adresse Email * </h3>
          <input type="text" value={email} onChange={(event)=> {
              setEmail(event.target.value);
            }} />
          <br />

          <div>
            <div>
              <h3> Mot de Passe * </h3>
              <input type="text" value={MotPasse} onChange={(event)=> {
                 setMotPasse(event.target.value);
              }} />
              <br />
            </div>
            <div>
              <h3> Confirmez Mot de Passe * </h3>
              <input type="text" value={ConfirmMP} onChange={(event)=> {
               setConfirmMP(event.target.value);
              }} />
              <br />
            </div>
          </div>

          <input type="checkbox" value={checkbox} onChange={(event)=>{
              setcheckBox(event.target.value);
          }}/> 
          <p>
            J'accepte les Conditions Générales de Vente et les Conditions
            Générales d'utilisation.
          </p>
          <br />

          <button type="submit" className="FormSign"> Créer mon Compte Personnel </button>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
