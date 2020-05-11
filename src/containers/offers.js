import React, { useState, useEffect } from "react";
import "./offers.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Offers = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/offer/with-count"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div style={{ fontStyle: "italic", fontWeight: "bold" }}>
      
      Chargement en Cours ... Wait Please
    </div>
  ) : (
    <div>

 {/* Affichage des offres  */}

      {data.offers.map((offer) => {
        return (
          <Link to={`/offer/${offer._id}`} className="LinkPublication" key={offer._id} >
            <div className="FormOffer">
              <img src={offer.picture.url} alt={offer.title} />
              <div>
                <h1> {offer.title} </h1>
                <p> Prix : {offer.price} $</p>
                <p> {offer.description.slice(0, 40)}... </p>
                <p> Date de l'offre : {offer.created} </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Offers;
