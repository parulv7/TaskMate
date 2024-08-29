import { useContext } from "react";
import { Context } from "../../ContextProvider/ContextProvider";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  const { tasks } = useContext(Context);
  return (
    <div>
      {tasks.length > 0 ? (
        <div>
          <ul>
            {tasks.map((task) => (
              <TaskItem key={task.id} taskItem={task} />
            ))}
          </ul>
        </div>
      ) : (
        <h2>Your task list is empty</h2>
      )}
    </div>
  );
};

export default TaskList;
