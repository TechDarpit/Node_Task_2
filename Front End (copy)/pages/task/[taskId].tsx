import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TaskDetails from "../../components/Task/TaskDetails";
import { getData } from "../../helper/requests";
import { useAuth } from "../../store/auth-context";
import { initialTask, Task } from "../../store/interfaces";
import withAuth from "../../store/withAuth";

const TaskDetailsPage: NextPage = () => {
  const { isAuth, token } = useAuth();
  const [taskData, setTaskData] = useState<Task>(initialTask);
  const router = useRouter();

  const tId = router.query.taskId?.toString();
  useEffect(() => {
    if (isAuth) {
      const getTask = async () => {
        const task = await getData("task", tId, token);
        if (task) {
          console.log(task);
          setTaskData(task);
        }
      };
      getTask();
    }
  }, [tId]);

  // console.log(taskData);

  return (
    <>
      <div className="main">
        <h3 className="centered">Task Details Page</h3>
        <TaskDetails taskData={taskData} />
      </div>
    </>
  );
};

export default withAuth(TaskDetailsPage);
