import React, { useState } from "react";
import { InputGroup, Form, Button, Stack } from "react-bootstrap";

import { Search } from "react-bootstrap-icons";
import { initialTaskFilter, TaskFilter } from "../../store/interfaces";

const TaskSearchFilterBar: React.FC<{
  onFilter: (fData: TaskFilter) => void;
}> = (props) => {
  const { onFilter } = props;

  const [filterData, setFilterData] = useState(initialTaskFilter);

  const filterTasksHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    const value = event.target.value;

    if (field === "searchValue" && value.length % 3 === 0) {
      onFilter({ ...filterData, searchValue: value });
    } else if (field === "sortValue" || field === "filterValue") {
      onFilter({ ...filterData, [field]: value });
    }
  };

  return (
    <Form>
      <Stack className="searchContainer" direction="horizontal" gap={3}>
        {/* <InputGroup id="searchValue" onClick={filterTasksHandler}>
          <FormControl placeholder="Search..." />
          <InputGroup.Text>
            <Search />
          </InputGroup.Text>
        </InputGroup> */}

        <Form.Group
          className="sortWidth"
          controlId="searchValue"
          onChange={filterTasksHandler}
        >
          <Form.Control type="text" placeholder="Search" />
        </Form.Group>

        <Form.Group
          className="sortWidth"
          controlId="sortValue"
          onChange={filterTasksHandler}
        >
          <Form.Select>
            <option value="" selected>
              Sort By
            </option>
            <option value="title-asc">Title A - Z</option>
            <option value="title-desc">Title Z - A</option>
            <option value="dueDate">Due Date</option>
          </Form.Select>
        </Form.Group>

        <Form.Group
          className="sortWidth"
          controlId="filterValue"
          onChange={filterTasksHandler}
        >
          <Form.Select>
            <option value="" selected>
              Filter By Status
            </option>
            <option value="false">Pending</option>
            <option value="true">Completed</option>
          </Form.Select>
        </Form.Group>

        <div className="vr" />

        <Button type="reset" variant="outline-primary">
          Clear
        </Button>
      </Stack>
    </Form>
  );
};

export default TaskSearchFilterBar;
