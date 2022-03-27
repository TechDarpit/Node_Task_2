import Link from 'next/link';
import { Table } from 'react-bootstrap';

const TAskData = () => {
  return (
    <div className='tableContainer'>
      <Table hover bordered variant='light'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Assigned User</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <Link href='/task/1'>
            <tr>
              <td>1</td>
              <td>Complete Node Js Tsks</td>
              <td>Darpit Patel</td>
              <td>25-03-2022</td>
              <td>Pending</td>
            </tr>
          </Link>
          <Link href='/task/2'>
            <tr>
              <td>2</td>
              <td>Complete Node Js Tsks</td>
              <td>Jay Patel</td>
              <td>25-03-2022</td>
              <td>Pending</td>
            </tr>
          </Link>
        </tbody>
      </Table>
    </div>
  );
};

export default TAskData;
