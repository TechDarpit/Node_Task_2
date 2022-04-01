import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { iuUserData } from "../../helper/requests";
import { useAuth } from "../../store/auth-context";
import { User } from "../../store/interfaces";
import withAuth from "../../store/withAuth";

const CreateUserForm = () => {
  const [validated, setValidated] = useState(false);
  const { token } = useAuth();
  const router = useRouter();

  const fNameInpurRef = useRef<HTMLInputElement>(null);
  const lNameInpurRef = useRef<HTMLInputElement>(null);
  const emailInpurRef = useRef<HTMLInputElement>(null);
  const statusInpurRef = useRef<HTMLSelectElement>(null);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const form: any = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
      try {
        const userData: User = {
          uId: 0,
          firstName: fNameInpurRef.current!.value,
          lastName: lNameInpurRef.current!.value,
          email: emailInpurRef.current!.value,
          userStatus: statusInpurRef.current!.value === "true" ? true : false,
        };
        const result = await iuUserData(
          null,
          "POST",
          userData,
          token!.toString()
        );
        if (result) {
          router.push("/user");
        }
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
  };

  return (
    <>
      <div className="formContainer">
        <Form noValidate validated={validated} onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              ref={fNameInpurRef}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid first name
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              ref={lNameInpurRef}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid last name
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailInpurRef}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="userStatus">
            <Form.Label>User Status</Form.Label>
            <Form.Select ref={statusInpurRef} required>
              <option value="" disabled selected hidden>
                Select User Status
              </option>
              <option value="true">Active</option>
              <option value="false">Deactive</option>
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please select a valid user status
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="formBtn" variant="primary" type="submit">
            Create User
          </Button>
        </Form>
      </div>
    </>
  );
};

export default withAuth(CreateUserForm);
