export interface DisplayUser {
  uId: Number;
  firstName: string;
  lastName: string;
  email: string;
  userStatus: Boolean;
  tasksCount: number;
}

export interface User {
  uId: Number;
  firstName: string;
  lastName: string;
  email: string;
  userStatus: Boolean;
}

export const initialUser: User = {
  uId: 0,
  firstName: "",
  lastName: "",
  email: "",
  userStatus: true,
};

export interface Task {
  tId: Number;
  title: string;
  dueDate: Date;
  taskStatus: Boolean;
  userUId: Number;
  user: { firstName: string; lastName: string };
}

export interface CreateTask {
  title: string;
  dueDate: Date;
  uId: Number;
}

export interface UpdateTask {
  title: string;
  dueDate: Date;
  uId: Number;
  taskStatus: Boolean;
}

export const initialTask: Task = {
  tId: 0,
  title: "",
  dueDate: new Date("2000-01-01T00:00:00"),
  taskStatus: false,
  userUId: 0,
  user: { firstName: "", lastName: "" },
};

export interface activeUsers {
  uId: number;
  firstName: string;
  lastName: string;
}

export const initialAU: activeUsers = {
  uId: 0,
  firstName: "",
  lastName: "",
};

export interface TaskFilter {
  searchValue: string;
  sortValue: string;
  filterValue: string;
}

export const initialTaskFilter: TaskFilter = {
  searchValue: "",
  sortValue: "",
  filterValue: "",
};
