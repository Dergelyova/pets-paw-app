import React from "react";
import { BaseButton } from "./MenuButton.styles";

type IMenuButtonProps = {
  children: string;
};

export const MenuButton = ({ children }: IMenuButtonProps) => {
  return <BaseButton>{children}</BaseButton>;
};
