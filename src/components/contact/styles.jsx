import styled, { keyframes } from "styled-components";

export const StyledError = styled.label`
  display: flex;
  align-items: center;
  height: 15px;
  font-size: 13px;
  /* margin: 5px 0 9px 0; */
  color: ${(props) => (props.darkMode ? "white" : "#000")};
  font-style: italic;

  svg {
    margin-right: 5px;
  }
`;

const shadow = keyframes`
    0% {
        box-shadow: inset 5px 5px 10px #ad5216,
       inset 5px 5px 10px #e9701e;
       
    }
    100%{box-shadow:none;}
`;

export const Icon = styled.a`
  text-decoration: none;
  width: 50px;
  height: 50px;
  background-color: #333;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px #757575, -5px -5px 10px #757575;

  &:focus {
    animation: ${shadow} 0.15s ease-in-out;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 120px;
  font-size: 18px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: none;
  background-color: #757575;
  color: white;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
  }
`;
