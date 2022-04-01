import Link from "next/link";
import { ButtonGroup, Button, Table, Modal } from "react-bootstrap";
import { User } from "../../store/interfaces";
import { TrashFill, PencilSquare } from "react-bootstrap-icons";
import { useState } from "react";
import { deleteData } from "../../helper/requests";
import { useRouter } from "next/router";
import { useAuth } from "../../store/auth-context";

const UserData: React.FC<{ usersData: User[]; searchValue: string }> = (
  props
) => {
  const { usersData, searchValue } = props;

  const { token } = useAuth();
  const [showModel, setShowModel] = useState(false);
  const [sortDirection, setSortDirection] = useState({
    firstName: true,
    lastName: true,
    email: true,
    userStatus: true,
  });
  const [usersList, setUsersList] = useState<User[]>(usersData);

  const handleClose = () => setShowModel(false);
  const handleShow = () => setShowModel(true);

  const deleteUserHandler = async (uId: Number) => {
    // handleShow();
    try {
      // console.log(uId);
      const result = await deleteData("user", uId, token!.toString());
      if (result.delUserId) {
        const filteredUser = usersList.filter((user) => user.uId !== uId);
        setUsersList(filteredUser);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // sortpart

  const sortBy = <User, K extends keyof User>(
    users: User[],
    dateFieldName: K
  ) => {
    console.log(dateFieldName, sortDirection[dateFieldName]);

    const sortedusers = users.sort((a: User, b: User) => {
      const isReversed = sortDirection[dateFieldName] ? 1 : -1;

      if (dateFieldName === "userStatus") {
        if (sortDirection[dateFieldName]) {
          return a[dateFieldName] ? -1 : 1;
        } else {
          return a[dateFieldName] ? 1 : -1;
        }
      }
      return isReversed * a[dateFieldName].localeCompare(b[dateFieldName]);
    });
    setSortDirection({
      ...sortDirection,
      [dateFieldName]: !sortDirection[dateFieldName],
    });
    setUsersList(sortedusers);
  };

  return (
    <>
      <div className="tableContainer">
        {usersList.length <= 0 && <h3 className="center">No Users Found</h3>}
        {usersList.length > 0 && (
          <Table hover bordered variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th onClick={() => sortBy(usersList, "firstName")}>
                  First Name{" "}
                </th>
                <th onClick={() => sortBy(usersList, "lastName")}>Last Name</th>
                <th onClick={() => sortBy(usersList, "email")}>Email</th>
                <th onClick={() => sortBy(usersList, "userStatus")}>Status</th>
                {/* <th>Total Tasks</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersList
                .filter(
                  (user) =>
                    user.firstName.toLocaleLowerCase().includes(searchValue) ||
                    user.lastName.toLocaleLowerCase().includes(searchValue) ||
                    user.email.toLocaleLowerCase().includes(searchValue)
                )
                .map((user) => (
                  <tr key={+user.uId}>
                    <td>{user.uId}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.userStatus ? "Active" : "Deactive"}</td>
                    {/* <td>{user.totalTasks}</td> */}
                    <td>
                      <ButtonGroup className="center">
                        <Link href={`/user/${user.uId}`}>
                          <Button variant="link">Details</Button>
                        </Link>
                        <Link href={`/user/editUser/${user.uId}`}>
                          <Button variant="link">
                            <PencilSquare />
                          </Button>
                        </Link>
                        <Button
                          variant="link"
                          onClick={() => deleteUserHandler(user.uId)}
                        >
                          <TrashFill />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </div>

      {/* <Modal show={showModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              return true;
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default UserData;
