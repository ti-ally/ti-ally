import React from "react";
import cn from 'classname';

import Header from "./header";
import Footer from "./footer";
import BgSvg from "./bg-svg";

interface Props extends React.HTMLProps<HTMLDivElement> {

}

export default function Layout({
  className,
  children,
  ...rest
}: Props) {

  return (
    <div className={cn("isolate bg-white", className)}>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <BgSvg name="main-top" />
      </div>
      <Header />

      <main>
        {children}
      </main>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100vh-42.375rem)]">
        <BgSvg name="main-bottom" />
      </div>
      <Footer />
    </div>
  );
}