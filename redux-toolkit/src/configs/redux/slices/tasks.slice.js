/* eslint-disable import/first */
import { v4 as uuidv4 } from "uuid";
const tasks = [
  {
    id: uuidv4(),
    name: "a",
    status: "active",
  },
  {
    id: uuidv4(),
    name: "b",
    status: "inactive",
  },
  {
    id: uuidv4(),
    name: "c",
    status: "active",
  },
];
const checkLocalStorage = localStorage.getItem("tasks");
if (checkLocalStorage===null) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const initialState = {
  filters: {
    search: "",
    sort: {
      by: "A-Z",
      value: 0,
    },
  },
  tasks: JSON.parse(checkLocalStorage)||tasks,
};

// const tasksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "tasks/addTask":
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks,
//           {
//             id: uuidv4(),
//             name: action.payload.name,
//             status: action.payload.status,
//           },
//         ],
//       };
//     case "tasks/searchTask":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           search: action.payload,
//         },
//       };
//     case "tasks/sortTask":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           sort: {
//             by: action.payload,
//             value: 1,
//           },
//         },
//       };
//     case "tasks/deleteTask":
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };
//     case "tasks/editTask":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) => {
//           if (task.id === action.payload.id) {
//             return {
//               ...task,
//               name: action.payload.name,
//               status: action.payload.status,
//             };
//           }
//           return task;
//         }),
//       };
//     default:
//       return state;
//   }
// };

// export default tasksReducer;

import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: uuidv4(),
        name: action.payload.name,
        status: action.payload.status,
      });
    },
    searchTask: (state, action) => {
      state.filters.search = action.payload;
    },
    sortTask: (state, action) => {
      state.filters.sort.by = action.payload;
      state.filters.sort.value = 1;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            name: action.payload.name,
            status: action.payload.status,
          };
        }
        return task;
      });
    }
  }
})