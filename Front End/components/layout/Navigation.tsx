import { route } from "next/dist/server/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { useAuth } from "../../store/auth-context";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const { isAuth, token, login, logout } = useAuth();
  const router = useRouter();
  const logoutHandler = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        {isAuth && (
          <li>
            <Link href="/user">User</Link>
          </li>
        )}
        {isAuth && (
          <li>
            <Link href="/task">Task</Link>
          </li>
        )}
        {isAuth && (
          <li>
            <Button
              variant="light"
              className={styles.btn}
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </li>
        )}
        {!isAuth && (
          <li>
            <Link href="/signin">SignIn</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
