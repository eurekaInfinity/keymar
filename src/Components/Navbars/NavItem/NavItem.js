import React from "react";
import { WraperLinks, P } from "./NavItemElements";
function NavItem() {
  return (
    <WraperLinks>
      <P to="./" smooth>
        Servicios
      </P>
      <P to="./" smooth>
        Publicaciones
      </P>
      <P to="./" smooth>
        contacto
      </P>
    </WraperLinks>
  );
}

export default NavItem;
