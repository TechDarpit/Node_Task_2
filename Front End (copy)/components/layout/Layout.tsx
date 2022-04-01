import React, { Fragment } from "react";
import MainHeader from "./main-header";

import styles from "./Layout.module.css";

const Layout: React.FC = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
