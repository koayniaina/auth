import React from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { TbBrandOauth } from "react-icons/tb";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <TbBrandOauth />
        <h3>Auth</h3>
      </div>
      <div className={styles.loginPage}>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
}
