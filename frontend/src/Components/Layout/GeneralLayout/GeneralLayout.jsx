import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../../../styles/css/GeneralLayout.module.css";

const GeneralLayout = () => {
  return (
    <div className={styles.container}>
      <section className={styles.menu}></section>
      <section className={styles.pageContent}>
        <Outlet />
      </section>
    </div>
  );
};

export default GeneralLayout;
