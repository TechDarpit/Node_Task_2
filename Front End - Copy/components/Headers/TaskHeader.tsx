import Link from "next/link";
import { Button } from "react-bootstrap";

import styles from "./Header.module.css";

function TaskHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Admin Pannel</Link>
      </div>
      <div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/task">Task Management Home</Link>
            </li>
            <li>
              <Link href="/task/createTask">Create Task</Link>
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

export default TaskHeader;
