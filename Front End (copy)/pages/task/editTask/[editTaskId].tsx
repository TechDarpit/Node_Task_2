import type { GetServerSideProps, NextPage } from "next";
import cookies from "next-cookies";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditTaskForm from "../../../components/Task/EditTaskForm";
import EditTForm from "../../../components/Task/EditTaskForm";
import { getData } from "../../../helper/requests";
import { useAuth } from "../../../store/auth-context";
import { activeUsers, initialTask, Task } from "../../../store/interfaces";
import withAuth from "../../../store/withAuth";

const EditTaskPage: React.FC<{ activeUsers: activeUsers[] }> = (props) => {
  const { activeUsers } = props;

  const { isAuth, token } = useAuth();

  const [taskData, setTaskData] = useState<Task>(initialTask);
  const router = useRouter();

  const tId = router.query.editTaskId?.toString();

  useEffect(() => {
    if (isAuth) {
      const getTask = async () => {
        const task = await getData("task", tId, token);
        if (task) {
          // console.log(task);
          setTaskData(task);
        }
      };
      getTask();
    }
  }, [tId]);

  return (
    <>
      <div className="main">
        <h3 className="centered">Edit Task Page</h3>
        <EditTaskForm taskData={taskData} activeUsers={activeUsers} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { TOKEN } = cookies(ctx);

  const response = await fetch("http://localhost:8080/task/activeUsers", {
    headers: {
      Authorization: "Bearer " + TOKEN,
    },
  });
  const activeUsers = await response.json();

  return {
    props: {
      activeUsers: activeUsers,
    },
  };
};

export default withAuth(EditTaskPage);
