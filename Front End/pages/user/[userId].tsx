import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserDetails from "../../components/User/UserDetails";
import { getData } from "../../helper/requests";
import { useAuth } from "../../store/auth-context";
import { initialUser, User } from "../../store/interfaces";
import withAuth from "../../store/withAuth";

const UserDetailsPage: NextPage = () => {
  const { isAuth, token } = useAuth();
  const [userData, setUserData] = useState<User>(initialUser);
  const router = useRouter();

  const uId = router.query.userId?.toString();
  useEffect(() => {
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

  return (
    <>
      <div className="main">
        <h3 className="centered">User Details Page</h3>
        <UserDetails userData={userData} />
      </div>
    </>
  );
};

export default withAuth(UserDetailsPage);
