import React from "react";
import { Card } from "react-bootstrap";
import styles from "./UserDetails.module.css";
import { User } from "../../store/interfaces";

const UserDetails: React.FC<{ userData: User }> = (props) => {
  const { firstName, lastName, email, userStatus } = props.userData;

  return (
    <>
      <Card className={styles.container}>
        <Card.Header as="h2">{firstName + " " + lastName}</Card.Header>
        <Card.Body>
          <Card.Title>Email</Card.Title>
          <Card.Text>{email}</Card.Text>
          <hr />
          <Card.Title>Status</Card.Title>
          <Card.Text>{userStatus ? "Active" : "Deactive"}</Card.Text>
          <hr />
          <Card.Title>Total Tasks</Card.Title>
          {/* <Card.Text>{totalTasks}</Card.Text> */}
          <hr />
        </Card.Body>
      </Card>
    </>
  );
};

export default UserDetails;
