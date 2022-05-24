import styled from "styled-components";

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

export const InfoItemA = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => (props.darkMode ? "white" : "#000")};
  text-decoration: none;
  width: auto;

  span {
    margin-left: 20px;
    font-size: 20px;
  }
`;

export const InfoItemDiv = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => (props.darkMode ? "white" : "#000")};
  text-decoration: none;
  width: auto;

  span {
    margin-left: 20px;
    font-size: 20px;
  }
`;
