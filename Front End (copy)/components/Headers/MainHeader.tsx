import Link from "next/link";
import { Button } from "react-bootstrap";

import styles from "./Header.module.css";

function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Admin Pannel</Link>
      </div>
      <div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/user">User Management</Link>
            </li>
            <li>
              <Link href="/task">Task Management</Link>
            </li>
            <li>
              <Link href="/signin">Sign In</Link>
            </li>
            <li>
              <Button variant="light" className={styles.btn}>
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
