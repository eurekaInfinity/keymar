import styled from "styled-components";

export const WraperImg = styled.div`
  width: ${({ width }) => (width ? width : "80px")};
  height: ${({ height }) => (height ? height : "80px")};
  @media screen and (max-width: 960px) {
    width: 80px;
    height: 80px;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
