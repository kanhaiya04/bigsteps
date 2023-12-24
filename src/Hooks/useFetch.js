import { useState, useEffect } from "react";

const useFetch = (text) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
      .then((res) => {
        if (res.statusText === "OK") return res.json();
        return "Not Found";
      })
      .then((data) => setData(data));
  }, [text]);
  return [data];
};

export default useFetch;
