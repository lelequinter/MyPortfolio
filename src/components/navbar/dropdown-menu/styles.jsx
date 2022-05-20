import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Dropdown = animated(styled.div`
  width: 120px;
  height: auto;
  background-color: #333;
  position: fixed;
  top: 80px;
  right: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    position: fixed;
    top: 72vh;
    right: 10px;
  }
`);

export const DivItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 4px;

  &:hover,
  &:active {
    background-color: #222;
    border-radius: 5px;
  }

  svg {
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
  font-size: 18px;
`;
