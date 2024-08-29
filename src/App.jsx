import "./App.css";
import { GlobalProvider } from "./ContextProvider/ContextProvider";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
function App() {
  return (
    <>
      <div className="task-application">
        <GlobalProvider>
          <div>
            <AddTaskForm />
            <TaskList />
          </div>
        </GlobalProvider>
      </div>
    </>
  );
}

export default App;
