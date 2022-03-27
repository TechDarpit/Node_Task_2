import { useRouter } from 'next/router';
import React, { useState, useRef, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { useAuth } from "../../store/auth-context";

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const router = useRouter();
  // const { isAuth, login, logout } = useAuth();
  // console.log(isAuth);

  const [validated, setValidated] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form: any = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity()) {
      try {
        const response = await fetch('http://localhost:8080/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: emailInputRef.current!.value,
            password: passwordInputRef.current!.value,
          }),
        });
        const data = await response.json();
        if (response.status === 200) {
          console.log(data.token);
          // login(data.token);
          router.push('/');
        } else if (data.message) {
          alert(data.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='validationCustom01'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder="Enter Your Email I'd"
              ref={emailInputRef}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='validationCustom01'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Your Password'
              ref={passwordInputRef}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please provide a valid password
            </Form.Control.Feedback>
          </Form.Group>

          <Button className={styles.btn} variant='primary' type='submit'>
            Sign In
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default LoginForm;
