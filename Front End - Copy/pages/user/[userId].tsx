import type { NextPage } from 'next';
import UserHeader from '../../components/Headers/UserHeader';
import UserDetails from '../../components/User/UserDetails';

const UserDetailsPage: NextPage = () => {
  return (
    <>
      <UserHeader />
      <div className='main'>
        <h3 className='centered'>User Details Page</h3>
        <UserDetails />
      </div>
    </>
  );
};

export default UserDetailsPage;
