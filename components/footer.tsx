
import React from "react";
import cn from 'classnames';

interface Props extends React.HTMLProps<HTMLDivElement> {

}

export default function Footer({
  className,
  children,
  ...rest
}: Props) {

  return (
    <div className={cn("isolate bg-white", className)}>
      {children}
    </div>
  );
}