export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
  console.log("Deleting task with id:", action.payload);
  return {
    ...state,
    tasks: state.tasks.filter((task) => {
      console.log("Checking task with id:", task.id);
      return task.id !== action.payload;
    }),
  };
    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: [...state.tasks].map((task) => {
          if (task.id === action.payload) {
            return { ...task, isComplete: !task.isComplete };
          }
          return task;
        }),
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: [...state.tasks].map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, task: action.payload.task };
          }
          return task;
        }),
      };

    default:
      return state;
  }
};
