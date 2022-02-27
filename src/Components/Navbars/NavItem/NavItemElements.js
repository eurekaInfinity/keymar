import styled from "styled-components";
import { Link } from "react-router-dom";
export const WraperLinks = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 960px) {
    width: 100px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const P = styled(Link)`
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #89d4e1;
    font-size: 1.1em;
  }
`;
