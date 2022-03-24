import type { NextPage } from "next";
import UserHeader from "../../components/Headers/UserHeader";
import CreateUserForm from "../../components/User/CreateUserForm";

const CreateUserPage: NextPage = () => {
  return (
    <>
      <UserHeader />
      <div className="main">
        <h3 className="centered">Create User Page</h3>
        <CreateUserForm />
      </div>
    </>
  );
};

export default CreateUserPage;
