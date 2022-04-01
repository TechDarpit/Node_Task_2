import type { GetServerSideProps, NextPage } from "next";
import cookies from "next-cookies";
import Link from "next/link";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import SearchFilterBar from "../../components/Search_Filter_Bar/SearchFilterBar";
import TaskData from "../../components/Task/TaskData";
import { getMultipleData } from "../../helper/requests";
import { Task } from "../../store/interfaces";
import withAuth from "../../store/withAuth";

interface Props {
  tasks: Task[];
}

const TaskPage: React.FC<Props> = (props) => {
  const { tasks } = props;
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (searchKey: string) => {
    setSearchValue(searchKey);
  };

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
      <SearchFilterBar onSearch={searchHandler} />
      <TaskData searchValue={searchValue} tasksData={tasks} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { TOKEN } = cookies(ctx);
  // console.log(TOKEN);
  const tasks = await getMultipleData("task", TOKEN?.toString());
  // console.log(tasks);

  return {
    props: {
      tasks: tasks,
    },
  };
};

export default withAuth(TaskPage);
