import type { NextPage } from "next";
import { useEffect } from "react";

import { useAuth } from "../store/auth-context";
import withAuth from "../store/withAuth";

const Home: NextPage = () => {
  const { isAuth, login, logout } = useAuth();

  useEffect(() => {
    const jwtToken = localStorage.getItem("TOKEN");
    if (jwtToken) {
      login(jwtToken);
    }
  }, []);

  return (
    <>
      <div className="main">
        <h1 className="centered">Home Page</h1>
      </div>
    </>
  );
};

export default Home;
