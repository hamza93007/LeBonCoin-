import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../containers/offer.css";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span> En Cours de Traitement , Merci de rester Connecter ...</span>
  ) : (
    <div>
      <div className="FormOffer1">

        <img src={data.picture.url} alt={data.title} /> <br />
        <h1> {data.title} </h1> <br />
        <p> {data.price} $</p> <br />
        <p> {data.description}..</p>

      </div>
    </div>
  );
};

export default Offer;
