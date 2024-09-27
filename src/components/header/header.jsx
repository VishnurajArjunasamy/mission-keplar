import React from "react";
import { Home } from "../../constants/app.constant";
import styles from "./header.module.scss";
import down from "../../assets/caret-down.png"

const { SITBACK, Menus } = Home;

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>{SITBACK}</h1>
      <ul className={styles.menu}>
        <li>{Menus.COUCHES}</li>
        <li>{Menus.CHAIRS}</li>
        <li>{Menus.DINING}</li>
      </ul>
      <div className={styles["user-profile"]}>
        <p>Vizz</p>
        <img src={down}/>
      </div>
    </header>
  );
}
