import type { NextPage } from 'next';
import TaskHeader from '../../components/Headers/TaskHeader';
import SearchFilterBar from '../../components/Search_Filter_Bar/SearchFilterBar';
import TAskData from '../../components/Task/TaskData';

const TaskPage: NextPage = () => {
  return (
    <>
      <TaskHeader />
      <div className='main'>
        <h3 className='centered'>Task Page</h3>
        <SearchFilterBar />
        <TAskData />
      </div>
    </>
  );
};

export default TaskPage;
