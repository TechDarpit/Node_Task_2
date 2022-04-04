import type { NextPage } from "next";
import CreateUserForm from "../../components/User/CreateUserForm";
import withAuth from "../../store/withAuth";

const CreateUserPage: NextPage = () => {
  return (
    <>
      <div className="main">
        <h3 className="centered">Create User Page</h3>
        <CreateUserForm />
      </div>
    </>
  );
};

export default withAuth(CreateUserPage);
