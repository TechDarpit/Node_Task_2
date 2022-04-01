import type { GetServerSideProps, NextPage } from "next";
import cookies from "next-cookies";
import CreateTaskForm from "../../components/Task/CreateTaskForm";
import { getData } from "../../helper/requests";
import { activeUsers } from "../../store/interfaces";
import withAuth from "../../store/withAuth";

interface Props {
  activeUsers: activeUsers[];
}

const CreateTaskPage: React.FC<Props> = (props) => {
  const { activeUsers } = props;

  return (
    <>
      <div className="main">
        <h3 className="centered">Create Task Page</h3>
        <CreateTaskForm activeUsers={activeUsers} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { TOKEN } = cookies(ctx);
  // console.log(TOKEN);

  const response = await fetch("http://localhost:8080/task/activeUsers", {
    headers: {
      Authorization: "Bearer " + TOKEN,
    },
  });
  const data = await response.json();

  return {
    props: {
      activeUsers: data,
    },
  };
};

export default withAuth(CreateTaskPage);
