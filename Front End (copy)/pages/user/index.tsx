import type { NextPage } from "next";
import UserHeader from "../../components/Headers/UserHeader";
import UserData from "../../components/User/UserData";

const UserPage: NextPage = () => {
  return (
    <>
      <UserHeader />
      <div className="main">
        <h3 className="centered">User Page</h3>
        <UserData />
      </div>
    </>
  );
};

export default UserPage;
