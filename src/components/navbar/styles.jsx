import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
  width: 50px;
  height: 50px;
  background-color: #333;
  border-radius: 50%;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    position: fixed;
    top: 92vh;
    right: 10px;
  }
`;
