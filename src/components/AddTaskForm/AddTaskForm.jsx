import { useContext, useState } from "react";
import { Context } from "../../ContextProvider/ContextProvider";

import "./AddTask.css";
const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask,  } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please add a task.");
      return;
    } else {
      const taskItem = {
        id: Date.now(),
        task,
      };

      addTask(taskItem);
      setTask("");
    }
  };
  return (
    <div className="task-section">
      <div className="task__application--title">
      <h1 className="color-inner1">Task</h1>
      <h1 className="color-inner2">Mate</h1>
      </div>
      <div className="task__add">
        <form action="" onSubmit={handleSubmit}>
          <div className="add__task--container">
            <div className="add__task">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter your task..."
              />
              <button className="btn">+</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
