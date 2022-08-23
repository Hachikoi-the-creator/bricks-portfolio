import React from "react";
import { Button } from "react-bricks-ui/website";
import { types } from "react-bricks/frontend";

const ButtonComp: types.Brick = () => {
  return <div className="p-6 text-center"></div>;
};

ButtonComp.schema = {
  name: "buttonComp",
  label: "Button Comp",
  sideEditProps: [],
};

export default ButtonComp;
