import Link from 'next/link';
import { useState } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { PencilSquare, TrashFill } from 'react-bootstrap-icons';
import { dateConvert } from '../../helper/date';
import { deleteData } from '../../helper/requests';
import { useAuth } from '../../store/auth-context';
import { Task } from '../../store/interfaces';

const TaskData: React.FC<{ tasksData: Task[]; searchValue: string }> = (
  props
) => {
  const { tasksData, searchValue } = props;

  const { token } = useAuth();
  const [tasksList, setTasksList] = useState<Task[]>(tasksData);
  // console.log(tasksList[0].dueDate);

  const deleteTaskHandler = async (tId: Number) => {
    try {
      // console.log(tId);
      const result = await deleteData('task', tId, token!.toString());
      if (result.delTaskId) {
        const filteredTask = tasksList.filter((task) => task.tId !== tId);
        setTasksList(filteredTask);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='tableContainer table-horiz-scroll'>
        {tasksList.length <= 0 && <h3 className='center'>No Taska Found</h3>}
        {tasksList.length > 0 && (
          <Table hover bordered variant='light'>
            <thead>
              <tr>
                <th>#</th>
                <th>Title </th>
                <th>Assigned User</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasksList
                .filter(
                  (task) =>
                    task.title.toLocaleLowerCase().includes(searchValue) ||
                    task.user.firstName
                      .toLocaleLowerCase()
                      .includes(searchValue) ||
                    task.user.lastName.toLocaleLowerCase().includes(searchValue)
                )
                .map((task) => (
                  <tr key={+task.tId}>
                    <td>{task.tId}</td>
                    <td>{task.title}</td>
                    <td>{task.user.firstName + ' ' + task.user.lastName}</td>
                    <td>{dateConvert(task.dueDate)}</td>
                    <td>{task.taskStatus ? 'Completed' : 'Pending'}</td>

                    <td>
                      <ButtonGroup className='center'>
                        <Link href={`/task/${task.tId}`}>
                          <Button variant='link'>Details</Button>
                        </Link>
                        <Link href={`/task/editTask/${task.tId}`}>
                          <Button variant='link'>
                            <PencilSquare />
                          </Button>
                        </Link>
                        <Button
                          variant='link'
                          onClick={() => deleteTaskHandler(task.tId)}
                        >
                          <TrashFill />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default TaskData;
