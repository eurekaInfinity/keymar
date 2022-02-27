import React from "react";
import Img from "./Img/Img";
import NavItem from "./NavItem/NavItem";
import { Container, Wraper } from "./NavbarsElements";
function Nabvar() {
  return (
    <Container>
      <Wraper>
        <Img src="./img/keymar1.png" alt="Logo" />
        <NavItem />
      </Wraper>
    </Container>
  );
}

export default Nabvar;
