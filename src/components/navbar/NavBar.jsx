import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Wrapper } from "./styles";

function NavBar(props) {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper
      onClick={() => {
        setOpen(!open);
      }}
      onBlur={() => {
        setTimeout(() => {
          setOpen(false);
        }, 150);
      }}
    >
      {open ? (
        <HiX size={27} color="white" />
      ) : (
        <HiOutlineMenuAlt3 size={25} color="white" />
      )}
      {open && props.children}
    </Wrapper>
  );
}

export default NavBar;
