import styled, { keyframes } from "styled-components";

export const ScrollDown = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    display: none;
  }
`;

const moveWheel = keyframes`
0%{
    opacity:0;
    transform: translateY(-1rem);
}
100%{
    opacity:1;
    transform: translateY(1rem);
}
`;

export const Mouse = styled.span`
  border: 2px solid ${props => props.darkMode? "white":"#333"};
  border-radius: 20px;
  display: flex;
  width: 25px;
  height: 50px;
`;

export const MouseWheel = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: ${props => props.darkMode? "white":"#333"};
  border-radius: 50%;
  margin: auto;
  animation: ${moveWheel} 1s linear infinite;
`;
