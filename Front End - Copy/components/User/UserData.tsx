import Link from 'next/link';
import { Table } from 'react-bootstrap';

const UserData = () => {
  return (
    <div className='tableContainer'>
      <Table hover bordered variant='light'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Total Tasks</th>
          </tr>
        </thead>
        <tbody>
          <Link href='/user/1'>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>test@test.com</td>
              <td>Active</td>
              <td>2</td>
            </tr>
          </Link>
          <Link href='/user/2'>
            <tr>
              <td>2</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>test2@test.com</td>
              <td>Deactive</td>
              <td>1</td>
            </tr>
          </Link>
        </tbody>
      </Table>
    </div>
  );
};

export default UserData;
