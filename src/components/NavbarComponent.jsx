import { useState } from "react";
import { Dropdown, Form, InputGroup, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateType } from "../store/TypeSlice";
import { useLocation, useNavigate } from "react-router-dom";
import _ from "lodash";

export const NavbarComponent = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const dispatch = useDispatch();
  const types = [
    "none",
    "normal",
    "fire",
    "water",
    "grass",
    "flying",
    "fighting",
    "poison",
    "electric",
    "ground",
    "rock",
    "psychic",
    "ice",
    "bug",
    "ghost",
    "steel",
    "dragon",
    "dark",
    "fairy",
  ];
  let navigator = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    navigator(`/search/${_.lowerCase(search)}`);
    setSearch("");
  };

  return (
    <Nav className="justify-content-center">
      <InputGroup className="mb-3" style={{ width: "35%", padding: "0" }}>
        <Form.Control
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            cursor={"pointer"}
            onClick={handleSearch}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </InputGroup.Text>
      </InputGroup>
      {currentPathname === "/" && (
        <Dropdown className="ps-2">
          <Dropdown.Toggle
            style={{
              backgroundColor: "#B6BBC4",
              border: "none",
              color: "black",
            }}
            id="dropdown-basic"
          >
            Type
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {types.map((value, index) => (
              <Dropdown.Item
                onClick={() => {
                  dispatch(updateType(value));
                }}
                key={index}
              >
                {_.capitalize(value)}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </Nav>
  );
};
