import styled from "styled-components";
import Button from "./Button";

export const RedButton = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.bg};

  &:hover {
    color: blue;
  }
  &:hover {
    & h1 {
      color: violet;
    }
  }
`;

export const ButtonLabel = styled.h1`
  font-size: 9px;
  //   &:hover {
  //     background-color: violet;
  //   }
`;
