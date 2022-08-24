import React, { PropsWithChildren } from "react";
import "../../styles/global.scss";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <>
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout;
