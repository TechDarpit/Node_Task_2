import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditTaskForm = () => {
  const [validated, setValidated] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const form: any = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
      console.log('Submit');
    }
  };

  return (
    <>
      <div className='formContainer'>
        <Form noValidate validated={validated} onSubmit={submitHandler}>
          <Form.Group className='mb-3' controlId='taskTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Task Title'
              defaultValue='Complete Node Js Tsks'
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid title
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='tempType'>
            <Form.Label>Task User</Form.Label>
            <Form.Select required defaultValue='u3'>
              <option value='' disabled hidden>
                Select User
              </option>
              <option value='u1'>User 1</option>
              <option value='u2'>User 2</option>
              <option value='u3'>User 3</option>
              <option value='u4'>User 4</option>
              <option value='u5'>User 5</option>
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please select a valid user
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='dueDate'>
            <Form.Label>Due Date</Form.Label>
            <Form.Control type='date' defaultValue='2000-08-20' required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid due date
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='taskStatus'>
            <Form.Label>Task Status</Form.Label>
            <Form.Select defaultValue='Panding' required>
              <option value='' disabled hidden>
                Select Task Status
              </option>
              <option value='Panding'>Panding</option>
              <option value='Completed'>Completed</option>
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please select a valid user status
            </Form.Control.Feedback>
          </Form.Group>

          <Button className='formBtn' variant='primary' type='submit'>
            Update
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditTaskForm;
