import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(0deg, #fff -0.03%, hsla(0, 0%, 100%, 0) 35.46%),
    radial-gradient(
      34.87% 63.86% at -3.49% 53.56%,
      #e5f3fc 0,
      rgba(229, 243, 252, 0) 100%
    ),
    radial-gradient(
      31.77% 108.34% at 18.23% -5.77%,
      hsla(0, 0%, 100%, 0.5) 0,
      hsla(0, 0%, 100%, 0) 98.36%
    ),
    radial-gradient(73.6% 100% at 50% 100%, #fff 0, hsla(0, 0%, 100%, 0) 98.36%),
    radial-gradient(
      72.08% 187.02% at 100% 53.56%,
      #d3befc 0,
      rgba(230, 220, 250, 0) 100%
    ),
    linear-gradient(223.83deg, #e6dcfa 11.75%, #fff 75.51%);
  height: auto;
  width: 100%;
  max-width: 1600px;
`;
export const WraperImagen = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WraperText = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 0 0 10%;
`;
export const Text = styled.p`
  font-size: 30px;
  color: black;
  font-weight: bold;
  text-align: left;
`;
export const Img = styled.img`
  width: 50%;
  height: 50%;
`;
