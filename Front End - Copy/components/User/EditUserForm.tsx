import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditUserForm = () => {
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
          <Form.Group className='mb-3' controlId='firstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter First Name'
              defaultValue='Darpit'
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid first name
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='lastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Last Name'
              defaultValue='Patel'
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid last name
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              defaultValue='test@test.com'
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='userStatus'>
            <Form.Label>User Status</Form.Label>
            <Form.Select defaultValue='Active' required>
              <option value='' disabled hidden>
                Select User Status
              </option>
              <option value='Active'>Active</option>
              <option value='Deactive'>Deactive</option>
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

export default EditUserForm;
