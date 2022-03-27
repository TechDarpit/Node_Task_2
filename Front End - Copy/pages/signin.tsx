import type { NextPage } from 'next';
import MainHeader from '../components/Headers/MainHeader';
import LoginForm from '../components/Login_Form/LoginForm';

const SignUpPage: NextPage = () => {
  return (
    <div>
      <MainHeader />
      <div className='main'>
        <h3 className='centered'>Admin SignIn</h3>
        <LoginForm />
      </div>
    </div>
  );
};

export default SignUpPage;
