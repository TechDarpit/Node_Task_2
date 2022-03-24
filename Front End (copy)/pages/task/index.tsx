import type { NextPage } from "next";
import TaskHeader from "../../components/Headers/TaskHeader";

const TaskPage: NextPage = () => {
  return (
    <>
      <TaskHeader />
      <div className="main">
        <h3 className="centered">Task Page</h3>
      </div>
    </>
  );
};

export default TaskPage;
