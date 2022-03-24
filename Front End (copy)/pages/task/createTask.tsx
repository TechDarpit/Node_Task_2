import type { NextPage } from "next";
import TaskHeader from "../../components/Headers/TaskHeader";
import CreateTaskForm from "../../components/Task/CreateTaskForm";

const CreateTaskPage: NextPage = () => {
  return (
    <>
      <TaskHeader />
      <div className="main">
        <h3 className="centered">Create Task Page</h3>
        <CreateTaskForm />
      </div>
    </>
  );
};

export default CreateTaskPage;
