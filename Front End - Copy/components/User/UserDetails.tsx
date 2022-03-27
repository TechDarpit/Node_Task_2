import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';
import styles from './UserDetails.module.css';

const UserDetails = () => {
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
        <Card.Header as='h2'>Darpit Patel</Card.Header>
        <Card.Body>
          <Card.Title>Email</Card.Title>
          <Card.Text>test@test.com</Card.Text>
          <hr />
          <Card.Title>Status</Card.Title>
          <Card.Text>Active</Card.Text>
          <hr />
          <Card.Title>Total Tasks</Card.Title>
          <Card.Text>2</Card.Text>
          <hr />
        </Card.Body>
        <Row>
          <Col>
            <Button className={styles.btn} variant='primary'>
              <Link href='/user/editUser/id1'>Edit User Details</Link>
            </Button>
          </Col>
          <Col>
            <Button
              className={styles.btn}
              variant='danger'
              onClick={handleShow}
            >
              Delete User Profile
            </Button>
          </Col>
        </Row>
      </Card>

      <Modal show={showModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
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

export default UserDetails;
