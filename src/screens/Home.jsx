import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonData } from "../store/PokemonSlice";
import PokemonCard from "../components/PokemonCard";
import { LineWave } from "react-loader-spinner";
import _ from "lodash";

const Home = () => {
  var displaying = 0;
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.pokemon;
  });
  const refetch = () => {
    if (displaying < 19) {
      dispatch(getPokemonData());
    }
  };
  const type = useSelector((state) => {
    return state.type.type;
  });
  const newData = () => {
    dispatch(getPokemonData());
  };
  useEffect(() => {
    displaying = 0;
    dispatch(getPokemonData());
  }, [type]);
  return (
    <Container fluid>
      <h1 style={{ color: "#11235A" }}>
        Pokemon:
        {type !== "none" && _.capitalize(type)}
      </h1>
      {items.data && (
        <InfiniteScroll
          dataLength={items.data.length}
          next={newData}
          hasMore={true}
          loader={
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
          }
          endMessage={<p>No more data to load.</p>}
        >
          <Row>
            {items.data.map((item, index) => {
              if (
                type === "none" ||
                type === item.types[0].type.name ||
                type === (item.types[1] ? item.types[1].type.name : "")
              ) {
                displaying++;
                return (
                  <PokemonCard
                    key={item.id}
                    name={item.name}
                    abilities={item.abilities}
                    id={item.id}
                    types={item.types}
                    stats={item.stats}
                  />
                );
              }
              return null;
            })}

            {items.data.length > 0 && refetch()}
          </Row>
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default Home;
