import React from "react";
import { WraperImage, A } from "./InformationElements";

const Information = ({ text, path, children }) => {
  return (
    <WraperImage>
      <A href={path} target="_black" style={{ textDecoration: "none" }}>
        {" "}
        {children} {text}
      </A>
    </WraperImage>
  );
};
export default Information;
