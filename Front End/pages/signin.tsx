import type { NextPage } from "next";
import LoginForm from "../components/Login_Form/LoginForm";

const SignUpPage: NextPage = () => {
  return (
    <div className="main">
      <h3 className="centered">Admin SignIn</h3>
      <LoginForm />
    </div>
  );
};

export default SignUpPage;
