import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import UserData from "../../components/User/UserData";
import { getMultipleData } from "../../helper/requests";
import { DisplayUser } from "../../store/interfaces";
import cookies from "next-cookies";
import withAuth from "../../store/withAuth";
import UserSearchFilterBar from "../../components/Search_Filter_Bar/UserSearchFilterBar";

interface Props {
  users: DisplayUser[];
}

const UserPage: React.FC<Props> = (props) => {
  const { users } = props;
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (searchKey: string) => {
    setSearchValue(searchKey);
  };

  return (
    <>
      <div className="titleContainer">
        <Row>
          <Col>
            <h3>User Page</h3>
          </Col>
          <Col className="right">
            <Link href="/user/createUser">
              <Button variant="outline-dark">Add User</Button>
            </Link>
          </Col>
        </Row>
      </div>
      <UserSearchFilterBar onSearch={searchHandler} />
      <UserData searchValue={searchValue} usersData={users} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { TOKEN } = cookies(ctx);
  // console.log(TOKEN);
  const users = await getMultipleData("user", TOKEN?.toString());
  // console.log(users);

  return {
    props: {
      users: users,
    },
  };
};

export default withAuth(UserPage);
