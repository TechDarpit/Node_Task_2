import React from "react";
import { InputGroup, FormControl, Row, Col, Form } from "react-bootstrap";

import { Search } from "react-bootstrap-icons";

const UserSearchFilterBar: React.FC<{
  onSearch: (searchKey: string) => void;
}> = (props) => {
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchKey = event.target.value;
    props.onSearch(searchKey);
  };

  return (
    <div className="searchContainer">
      <InputGroup onChange={searchHandler}>
        <FormControl placeholder="Search..." />
        <InputGroup.Text>
          <Search />
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default UserSearchFilterBar;
