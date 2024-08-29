/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { useReducer } from "react";
import { reducer } from "../reducer/reducer";
// import { getDataFormLocalstorage } from "../components/Utils/Utils";

const initialState = JSON.parse(localStorage.getItem("data")) ?? {
  tasks: [],
};

export const Context = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
    console.log(state);
  }, [state]);

  function addTask(task) {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  }

  function deleteTask(id) {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  function completeTask(id) {
    dispatch({
      type: "COMPLETE_TASK",
      payload: id,
      isComplete: false,
    });
  }
  function updateTask(id, task) {
    dispatch({
      type: "UPDATE_TASK",
      payload: { id, task },
    });
  }

  const value = {
    tasks: state.tasks,
    addTask,
    deleteTask,
    completeTask,
    updateTask,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
