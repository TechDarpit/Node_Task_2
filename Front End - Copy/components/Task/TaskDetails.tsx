import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';
import styles from './TaskDetails.module.css';

const TaskDetails = () => {
  const router = useRouter();

  const userId = router.query.userId;
  //   console.log(userId);

  const [showModel, setShowModel] = useState(false);

  const handleClose = () => setShowModel(false);
  const handleShow = () => setShowModel(true);

  return (
    <>
      <Card className={styles.container}>
        {/* <Card.Header as='h2'>{firstName + ' ' + lastName}</Card.Header> */}
        <Card.Header as='h2'>Complete Node Js Tsks</Card.Header>
        <Card.Body>
          <Card.Title>Assigned User</Card.Title>
          <Card.Text>Darpit Patel</Card.Text>
          <hr />
          <Card.Title>Due Date</Card.Title>
          <Card.Text>25-03-2022</Card.Text>
          <hr />
          <Card.Title>Status</Card.Title>
          <Card.Text>Pending</Card.Text>
          <hr />
        </Card.Body>
        <Row>
          <Col>
            <Button className={styles.btn} variant='primary'>
              <Link href='/task/editTask/id1'>Edit Task Details</Link>
            </Button>
          </Col>
          <Col>
            <Button
              className={styles.btn}
              variant='danger'
              onClick={handleShow}
            >
              Delete Task
            </Button>
          </Col>
        </Row>
      </Card>

      <Modal show={showModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='danger'>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskDetails;
