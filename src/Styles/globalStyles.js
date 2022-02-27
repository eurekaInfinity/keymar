import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    scroll-behavior: smooth;
}
`;
export const Wraper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: auto;
`;
