import Link from "next/link";
import { Button } from "react-bootstrap";

import styles from "./Header.module.css";

function UserHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Admin Pannel</Link>
      </div>
      <div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/user">User Management Home</Link>
            </li>
            <li>
              <Link href="/user/createUser">Create User</Link>
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

export default UserHeader;
