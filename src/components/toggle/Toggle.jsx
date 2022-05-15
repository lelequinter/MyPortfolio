import React, { useContext } from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../context/context";
import "./toggle.css";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <BsSun size="20px" />
      <BsMoonFill size="20px" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
