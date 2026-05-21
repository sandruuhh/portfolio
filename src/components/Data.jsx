import React, { useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata";

function Data() {
  const [photos, setPhotos] = useState([]);

  async function fetchPhotos() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      console.log(response.data);

      setPhotos(response.data.slice(0, 20));
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  return <Showdata photos={photos} />;
}

export default Data;