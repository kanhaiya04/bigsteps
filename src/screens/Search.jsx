import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import { LineWave } from "react-loader-spinner";
import { Button } from "react-bootstrap";

const Search = () => {
  let navigator = useNavigate();
  let { text } = useParams();
  const data = useFetch(text);
  if (data[0] === undefined)
    return (
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#11235A"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    );
  if (data[0] === "Not Found") {
    return (
      <>
        <h1 style={{color:"#11235A"}}>Not found</h1>
        <Button
          className="mt-4"
          style={{ backgroundColor: "#B6BBC4", border: "none", color: "black" }}
          onClick={() => {
            navigator("/");
          }}
        >
          Home
        </Button>
      </>
    );
  }
  return (
    <>
      <h1 style={{color:"#11235A"}}>Search result:</h1>
      <PokemonCard
        key={data[0].id}
        name={data[0].name}
        abilities={data[0].abilities}
        id={data[0].id}
        types={data[0].types}
        stats={data[0].stats}
      />
      <Button
        className="mt-4"
        style={{ backgroundColor: "#B6BBC4", border: "none", color: "black" }}
        onClick={() => {
          navigator("/");
        }}
      >
        Home
      </Button>
    </>
  );
};

export default Search;
