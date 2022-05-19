import styled from "styled-components";

export const StyledError = styled.label`
  display: flex;
  align-items: center;
  height: 15px;
  font-size: 13px;
  /* margin: 5px 0 9px 0; */
  color: ${props => props.darkMode? "white":"#000"};
  font-style: italic;

  svg{
      margin-right: 5px;
  }
`;

export const ButtonSection = styled.div`
    display: flex;
    justify-content: start;
`;

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    input{
        width: 100%;
    }
`;
