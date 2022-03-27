import type { NextPage } from 'next';
import UserHeader from '../../components/Headers/UserHeader';
import SearchFilterBar from '../../components/Search_Filter_Bar/SearchFilterBar';
import UserData from '../../components/User/UserData';

const UserPage: NextPage = () => {
  return (
    <>
      <UserHeader />
      <div className='main'>
        <h3 className='centered'>User Page</h3>
        <SearchFilterBar />
        <UserData />
      </div>
    </>
  );
};

export default UserPage;
