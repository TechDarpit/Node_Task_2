import type { NextPage } from 'next';
import TaskHeader from '../../components/Headers/TaskHeader';
import TaskDetails from '../../components/Task/TaskDetails';

const TaskDetailsPage: NextPage = () => {
  return (
    <>
      <TaskHeader />
      <div className='main'>
        <h3 className='centered'>Task Details Page</h3>
        <TaskDetails />
      </div>
    </>
  );
};

export default TaskDetailsPage;
