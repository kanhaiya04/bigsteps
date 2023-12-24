import React, { useState } from "react";
import { Card, Col, Modal, ProgressBar, Row } from "react-bootstrap";
import _ from "lodash";

const PokemonCard = (props) => {
  const colors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    flying: "#A890F0",
    fighting: "#C03028",
    poison: "#A040A0",
    electric: "#F8D030",
    ground: "#E0C068",
    rock: "#B8A038",
    psychic: "#F85888",
    ice: "#98D8D8",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col
        md="6"
        lg="4"
        xl="3"
        className="d-flex justify-content-center align-items-center pt-4 text-center"
        onClick={handleShow}
      >
        <Card
          style={{
            borderRadius: "4%",
            width: "16rem",
            height: "10rem",
            backgroundColor: colors[props.types[0].type.name],
          }}
          className="d-flex align-items-center"
        >
          <Card.Body>
            <Row>
              <Col className="align-items-center">
                <h5 style={{ color: "white", fontWeight: "bold" }}>
                  {_.capitalize(props.name)}
                </h5>
                <p style={{ color: "white" }}>
                  {_.startCase(props.abilities[0].ability.name)}
                </p>
                {props.abilities[1] && (
                  <p style={{ color: "white" }}>
                    {_.startCase(props.abilities[1].ability.name)}
                  </p>
                )}
              </Col>
              <Col className="d-flex align-items-center">
                <img
                  src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`}
                  alt=""
                  width="100rem"
                  height="100rem"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ backgroundColor: "#B6BBC4", padding: "10%" }}>
          <Row>
            <Col xs="4" className="text-end">
              Speed
            </Col>
            <Col xs="auto" className="text-end">
              {props.stats[5].base_stat}
            </Col>
            <Col style={{ margin: "auto" }}>
              <ProgressBar variant="warning" now={props.stats[5].base_stat} />
            </Col>
          </Row>
          <Row>
            <Col xs="4" className="text-end">
              Special Defense
            </Col>
            <Col xs="auto" className="text-end">
              {props.stats[4].base_stat}
            </Col>
            <Col style={{ margin: "auto" }}>
              <ProgressBar variant="danger" now={props.stats[4].base_stat} />
            </Col>
          </Row>
          <Row>
            <Col xs="4" className="text-end">
              Special Attack
            </Col>
            <Col xs="auto" className="text-end">
              {props.stats[3].base_stat}
            </Col>
            <Col style={{ margin: "auto" }}>
              <ProgressBar variant="success" now={props.stats[3].base_stat} />
            </Col>
          </Row>
          <Row>
            <Col xs="4" className="text-end">
              Defense
            </Col>
            <Col xs="auto" className="text-end">
              {props.stats[2].base_stat}
            </Col>
            <Col style={{ margin: "auto" }}>
              <ProgressBar variant="danger" now={props.stats[2].base_stat} />
            </Col>
          </Row>
          <Row>
            <Col xs="4" className="text-end">
              Attack
            </Col>
            <Col xs="auto" className="text-end">
              {props.stats[1].base_stat}
            </Col>
            <Col style={{ margin: "auto" }}>
              <ProgressBar variant="success" now={props.stats[1].base_stat} />
            </Col>
          </Row>
          <Row>
            <Col xs="4" className="text-end">
              Hp
            </Col>
            <Col xs="auto" className="text-end">
              {props.stats[0].base_stat}
            </Col>
            <Col style={{ margin: "auto" }}>
              <ProgressBar variant="warning" now={props.stats[0].base_stat} />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PokemonCard;
