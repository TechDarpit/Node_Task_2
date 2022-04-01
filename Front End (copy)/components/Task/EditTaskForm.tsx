import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { activeUsers, Task } from "../../store/interfaces";

const EditTaskForm: React.FC<{ activeUsers: activeUsers[]; taskData: Task }> = (
  props
) => {
  const { activeUsers } = props;
  const { tId, title, dueDate, taskStatus, userUId } = props.taskData;

  const currentDate = new Date(dueDate).toISOString().split("T")[0];

  const [validated, setValidated] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const form: any = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
    }
  };

  return (
    <>
      {title.length > 0 && (
        <div className="formContainer">
          <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="taskTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Task Title"
                defaultValue={title}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid title
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="tempType">
              <Form.Label>Task User</Form.Label>
              <Form.Select defaultValue={+userUId} required>
                {activeUsers.map((activeUser) => (
                  <option value={activeUser.uId} key={activeUser.uId}>
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
              <Form.Control type="date" defaultValue={currentDate} required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid due date
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="taskStatus">
              <Form.Label>Task Status</Form.Label>
              <Form.Select
                defaultValue={taskStatus ? "true" : "false"}
                required
              >
                <option value="false">Pending</option>
                <option value="true">Completed</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please select a valid task status
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

export default EditTaskForm;
