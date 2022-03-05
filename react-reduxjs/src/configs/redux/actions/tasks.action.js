const addTask = (name, status) => {
  return {
    type: "tasks/addTask",
    payload: {
      name,
      status,
    },
  };
};

const searchTask = (search) => {
  return {
    type: "tasks/searchTask",
    payload: search
  };
}

const sortTask = (by) => {
  return {
    type: "tasks/sortTask",
    payload: by
  };
}

const deleteTask = (id) => {
  return {
    type: "tasks/deleteTask",
    payload: id
  };
}

const editTask = (data) => {
  return {
    type: "tasks/editTask",
    payload: {
      id:data.id,
      name:data.name,
      status:data.status
    }
  }
}

const tasksAction = {
   addTask,
   searchTask,
   sortTask,
   deleteTask,
    editTask
}

export default tasksAction;
