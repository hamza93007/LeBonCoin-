import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";



function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://leboncoin-api.herokuapp.com/offer/with-count");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
  <div>

  </div>
  );
}

export default App;
