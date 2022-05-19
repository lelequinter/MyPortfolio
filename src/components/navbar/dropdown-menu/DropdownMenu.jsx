import React from "react";
import { FiUser, FiHome, FiLayers } from "react-icons/fi";
import { MdOutlineContactPhone } from "react-icons/md";
import { Dropdown, Item, DivToggle } from "./styles";
import Toggle from "../../toggle/Toggle";

function DropdownMenu() {
  return (
    <Dropdown>
      <Item href="#">
        {" "}
        <FiHome /> Inicio
      </Item>
      <Item href="#about">
        {" "}
        <FiUser /> About
      </Item>
      <Item href="#projects">
        {" "}
        <FiLayers /> Projects
      </Item>
      <Item href="#contact">
        {" "}
        <MdOutlineContactPhone /> Contact
      </Item>
      <hr style={{width: "100%"}}/>
      <DivToggle>
        <Toggle /> Theme
      </DivToggle>
    </Dropdown>
  );
}

export default DropdownMenu;
