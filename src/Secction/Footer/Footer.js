import React from "react";
import Img from "../../Components/Navbars/Img/Img";
import Information from "./Information/Information";
import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail
} from "react-icons/ai";

import { Container, WraperInformation, WraperFooter } from "./FooterElements";
function FooterSection() {
  return (
    <Container>
      <WraperFooter>
        <Img height="500px" width="100px" />
        <WraperInformation>
          <Information
            text="313 551 8484"
            path="https://api.whatsapp.com/send?phone=573135518484&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre"
          >
            <AiOutlineWhatsApp color="#2FB943" />
          </Information>
          <Information
            text="yullisepulveda.psicologa"
            path="https://www.facebook.com/profile.php?id=100071934405518"
          >
            <AiOutlineFacebook color="rgb(56, 88, 152)" />
          </Information>
          <Information
            text="yullisepulveda.psicologa"
            path="https://www.instagram.com/keymar_consultoriopsicologico/"
          >
            <AiOutlineInstagram
              //color="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
              color="#d6249f"
            />
          </Information>
          <Information
            text="yullisepulveda.psicologa@outlook.com"
            path="https://www.facebook.com/profile.php?id=100071934405518"
          >
            <AiOutlineMail color="black" />
          </Information>
        </WraperInformation>
      </WraperFooter>
    </Container>
  );
}

export default FooterSection;
