import React, { useState } from "react";
import DropdownMenu from "./dropdown-menu/DropdownMenu";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Wrapper } from "./styles";
import { useTransition } from "@react-spring/web";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const animation = useTransition(isOpen,{
    from: {x: 30, opacity: 0},
    enter: {x: 0, opacity: 1},
    leave: {x: 30, opacity: 0}
  });

  return (
    <Wrapper
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      onBlur={() => {
        setTimeout(() => {
          setIsOpen(false);
        }, 150);
      }}
    >
      {isOpen ? (
        <HiX size={27} color="white" />
      ) : (
        <HiOutlineMenuAlt3 size={25} color="white" />
      )}
      {animation((style, item) => 
      item? <DropdownMenu style={style} />: ''
      )}

    </Wrapper>
  );
}

export default NavBar;
