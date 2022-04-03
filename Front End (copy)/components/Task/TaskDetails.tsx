import React from "react";
import { Card } from "react-bootstrap";
import styles from "./TaskDetails.module.css";
import { Task } from "../../store/interfaces";

const TaskDetails: React.FC<{ taskData: Task }> = (props) => {
  const { title, taskStatus, dueDate } = props.taskData;
  const { firstName, lastName } = props.taskData.user;

  const humanReadableDate = new Date(dueDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Card className={styles.container}>
        <Card.Header as="h2">{title}</Card.Header>
        <Card.Body>
          <Card.Title>Assigned User</Card.Title>
          <Card.Text>{firstName + " " + lastName}</Card.Text>
          <hr />
          <Card.Title>Due Date</Card.Title>
          <Card.Text>{humanReadableDate}</Card.Text>
          <hr />
          <Card.Title>Status</Card.Title>
          <Card.Text>{taskStatus ? "Pending" : "Completed"}</Card.Text>
          <hr />
        </Card.Body>
      </Card>
    </>
  );
};

export default TaskDetails;
