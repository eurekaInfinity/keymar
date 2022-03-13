import React from "react";
import { WraperLinks, P } from "./NavItemElements";
function NavItem() {
  return (
    <WraperLinks>
      <P to="./">Servicios</P>
      <P to="./">Publicaciones</P>
      <P to="./">contacto</P>
    </WraperLinks>
  );
}

export default NavItem;
