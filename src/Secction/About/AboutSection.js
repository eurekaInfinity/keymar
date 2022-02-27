import React from "react";
import {
  Container,
  Img,
  WraperImagen,
  WraperText,
  Text
} from "./AboutElements";
function AboutSection() {
  return (
    <Container>
      <WraperImagen>
        <WraperText>
          <Text>Aparta tu sesión</Text>
          <Text>En el consultorio Keymar </Text>
        </WraperText>
        <Img src="./img/keymar.png" />
      </WraperImagen>
    </Container>
  );
}

export default AboutSection;
