import styled from "styled-components";

export const Dropdown = styled.div`
  width: 120px;
  height: auto;
  background-color: #333;
  position: fixed;
  top: 65px;
  right: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 7px;
`;

export const Item = styled.a`
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 18px;

    &:hover,
    &:active{
        background-color: #222;
        border-radius: 5px;
    }

    svg{
        margin-right: 10px;
        margin-left: 10px;
        color: white;
    }
`;

export const DivToggle = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5px;
    padding-left: 9px;
    color: white;
`;
