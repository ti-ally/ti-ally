import React from "react";

import MainMenu from "./main-menu";

interface Props extends React.HTMLProps<HTMLDivElement> {

}

export default function Header({
  className,
  ...rest
}: Props) {

  return (
    <div className={className} {...rest}>
      <MainMenu />
    </div>
  );
}