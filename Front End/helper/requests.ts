import { User, Task, CreateTask } from '../store/interfaces';

export const getData = async (
  mode: string,
  id: String | undefined,
  token: String | null
) => {
  try {
    const response = await fetch(
      `http://localhost:8080/${mode.toLowerCase()}/${id}`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    const data = await response.json();
    // console.log(user);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getMultipleData = async (
  mode: string,
  token: String | null | undefined
) => {
  let URL;
  if (mode === 'user') {
    URL = 'http://localhost:8080/user/getUsers';
  } else if (mode === 'task') {
    URL = 'http://localhost:8080/task/getTasks';
  }
  try {
    if (!URL) {
      const error = new Error('Invalide URL');
      throw error;
      return;
    }
    const response = await fetch(URL, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const data: User[] | Task[] = await response.json();
    // console.log(users);
    return data;
  } catch (err) {
    throw err;
  }
};

export const iuUserData = async (
  mode: string,
  uId: Number | null,
  method: string,
  bodyData: User | CreateTask | Task,
  token: string | null
) => {
  let url!: string;
  if (!uId && method === 'POST') {
    url = `http://localhost:8080/${mode}/create${mode}`;
  } else if (uId && method === 'PUT') {
    url = `http://localhost:8080/${mode}/${uId}`;
  }
  try {
    console.log(url);
    if (!url) {
      const error = new Error('Invalide URL');
      throw error;
      return;
    }
    const response = await fetch(url, {
      method: method,
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    if (response.status === 200) {
      return data;
    } else if (data.message) {
      throw new Error(data.message);
    }
  } catch (err) {
    throw err;
  }
};

export const deleteData = async (
  title: string,
  id: Number,
  token: string | null
) => {
  try {
    const response = await fetch(
      `http://localhost:8080/${title.toLowerCase()}/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
