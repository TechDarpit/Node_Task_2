import type { NextPage } from 'next';
import TaskHeader from '../../../components/Headers/TaskHeader';
import EditTaskForm from '../../../components/Task/EditTaskForm';

const EditTaskPage: NextPage = () => {
  return (
    <>
      <TaskHeader />
      <div className='main'>
        <h3 className='centered'>Edit Task Page</h3>
        <EditTaskForm />
      </div>
    </>
  );
};

export default EditTaskPage;
