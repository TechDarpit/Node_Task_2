import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { iuUserData } from "../../helper/requests";
import { useAuth } from "../../store/auth-context";
import { activeUsers, CreateTask } from "../../store/interfaces";

const CreateTaskForm: React.FC<{ activeUsers: activeUsers[] }> = (props) => {
  const [activeUsers, setActiveUsers] = useState(props.activeUsers);

  const [validated, setValidated] = useState(false);

  const { token } = useAuth();
  const router = useRouter();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const userInpurRef = useRef<HTMLSelectElement>(null);
  const dueDateInpurRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const form: any = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
      try {
        const taskData: CreateTask = {
          title: titleInputRef.current!.value,
          uId: +userInpurRef.current!.value,
          dueDate: new Date(dueDateInpurRef.current!.value),
        };
        const result = await iuUserData(
          "task",
          null,
          "POST",
          taskData,
          token!.toString()
        );
        if (result) {
          router.push("/task");
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
          <Form.Group className="mb-3" controlId="taskTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Title"
              ref={titleInputRef}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid title
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="tempType">
            <Form.Label>Task User</Form.Label>
            <Form.Select ref={userInpurRef} required>
              <option value="" disabled selected hidden>
                Select User
              </option>
              {activeUsers.map((activeUser) => (
                <option value={activeUser.uId}>
                  {activeUser.firstName + " " + activeUser.lastName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please select a valid user
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="dueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" ref={dueDateInpurRef} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid due date
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="formBtn" variant="primary" type="submit">
            Create Task
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateTaskForm;
