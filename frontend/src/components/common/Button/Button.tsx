import React from "react";
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material";

type ButtonProps = MaterialButtonProps;

export const Button: React.FC<ButtonProps> = (props) => {
  console.log(props);
  return <MaterialButton {...props} />;
};
