import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditUserForm from "../../../components/User/EditUserForm";
import { getData } from "../../../helper/requests";
import { useAuth } from "../../../store/auth-context";
import { initialUser, User } from "../../../store/interfaces";
import withAuth from "../../../store/withAuth";

const EditUserPage: NextPage = () => {
  const { isAuth, token, login } = useAuth();
  const [userData, setUserData] = useState<User>(initialUser);
  const router = useRouter();

  const uId = router.query.editUserId?.toString();
  // console.log(uId);
  useEffect(() => {
    const jwtToken = localStorage.getItem("TOKEN");
    if (jwtToken) {
      login(jwtToken);
    }
    if (isAuth) {
      const getUser = async () => {
        const user = await getData("user", uId, token);
        if (user) {
          setUserData(user);
        }
      };
      getUser();
    }
  }, [uId]);
  // console.log(userData);

  return (
    <>
      <div className="main">
        <h3 className="centered">Edit User Page</h3>
        <EditUserForm userData={userData} />
      </div>
    </>
  );
};

export default withAuth(EditUserPage);
