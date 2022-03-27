import type { NextPage } from 'next';
import UserHeader from '../../../components/Headers/UserHeader';
import EditUserForm from '../../../components/User/EditUserForm';

const EditUserPage: NextPage = () => {
  return (
    <>
      <UserHeader />
      <div className='main'>
        <h3 className='centered'>Edit User Page</h3>
        <EditUserForm />
      </div>
    </>
  );
};

export default EditUserPage;
