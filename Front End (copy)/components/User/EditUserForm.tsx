import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { iuUserData } from "../../helper/requests";
import { useAuth } from "../../store/auth-context";
import { User } from "../../store/interfaces";
import UserData from "./UserData";

const EditUserForm: React.FC<{ userData: User }> = (props) => {
  const [validated, setValidated] = useState(false);
  const { token } = useAuth();
  const router = useRouter();

  const { uId, firstName, lastName, email, userStatus } = props.userData;

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
        // console.log(UserData);
        const result = await iuUserData(
          uId,
          "PUT",
          userData,
          token!.toString()
        );
        if (result) {
          router.push("/user");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      {email.length > 0 && (
        <div className="formContainer">
          <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                defaultValue={firstName}
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
                defaultValue={lastName}
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
                defaultValue={email}
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
              <Form.Select
                defaultValue={userStatus ? "true" : "false"}
                ref={statusInpurRef}
                required
              >
                <option value="true">Active</option>
                <option value="false">Deactive</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please select a valid user status
              </Form.Control.Feedback>
            </Form.Group>

            <Button className="formBtn" variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default EditUserForm;
