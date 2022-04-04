import type { GetServerSideProps, NextPage } from "next";
import cookies from "next-cookies";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import TaskSearchFilterBar from "../../components/Search_Filter_Bar/TaskSearchFilterBar";
import TaskData from "../../components/Task/TaskData";
import { getMultipleData } from "../../helper/requests";
import { useAuth } from "../../store/auth-context";
import {
  initialTask,
  initialTaskFilter,
  Task,
  TaskFilter,
} from "../../store/interfaces";
import withAuth from "../../store/withAuth";

interface Props {
  tasks: Task[];
}

const TaskPage: NextPage = () => {
  const { isAuth, token } = useAuth();
  const [tasks, setTasks] = useState([initialTask]);
  const [filterData, setFilterData] = useState(initialTaskFilter);

  useEffect(() => {
    console.log("out");
    if (token) {
      console.log("in");
      const getTasks = async () => {
        const tasksData = await getMultipleData("task", token);
        if (tasksData) {
          setTasks(tasksData);
        }
      };
      getTasks();
    }
  }, []);

  const filterHandler = (fData: TaskFilter) => {
    setFilterData(fData);
  };

  console.log(filterData, tasks);

  return (
    <>
      <div className="titleContainer">
        <Row>
          <Col>
            <h3>Task Page</h3>
          </Col>
          <Col className="right">
            <Link href="/task/createTask">
              <Button variant="outline-dark">Add Task</Button>
            </Link>
          </Col>
        </Row>
      </div>
      <TaskSearchFilterBar onFilter={filterHandler} />
      <TaskData tasksData={tasks} />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
//   const { TOKEN } = cookies(ctx);
//   // console.log(TOKEN);
//   const tasks = await getMultipleData("task", TOKEN?.toString());
//   // console.log(tasks);

//   return {
//     props: {
//       tasks: tasks,
//     },
//   };
// };

export default withAuth(TaskPage);
