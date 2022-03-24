import type { NextPage } from "next";

import MainHeader from "../components/Headers/MainHeader";

const Home: NextPage = () => {
  return (
    <>
      <MainHeader />
      <div className="main">
        <h1 className="centered">Home Page</h1>
      </div>
    </>
  );
};

export default Home;
