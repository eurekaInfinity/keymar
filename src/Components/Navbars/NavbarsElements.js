import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;
export const Wraper = styled.div`
  width: 100%;
  height: 80px;
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
