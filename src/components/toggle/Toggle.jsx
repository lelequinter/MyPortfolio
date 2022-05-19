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
      <BsSun size="16px" />
      <BsMoonFill size="16px" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 19 : 44 }}
      ></div>
    </div>
  );
};

export default Toggle;
