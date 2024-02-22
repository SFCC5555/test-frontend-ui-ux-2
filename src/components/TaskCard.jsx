import PropTypes from "prop-types";
const TaskCard = ({ task, setTasks }) => {
  const changeTaskStatus = () => {
    setTasks((prev) => {
      const taskToUpdateIndex = prev.findIndex((t) => t.id === task.id);

      const updatedTasks = [...prev];
      updatedTasks[taskToUpdateIndex] = {
        ...updatedTasks[taskToUpdateIndex],
        isDone: !task.isDone,
      };

      return updatedTasks;
    });
  };

  const deleteTask = () => {
    setTasks((prev) => {
      const taskToDeleteIndex = prev.findIndex((t) => t.id === task.id);

      const updatedTasks = [...prev];
      updatedTasks.splice(taskToDeleteIndex, 1);

      return updatedTasks;
    });
  };

  return (
    <div className="flex items-center justify-between gap-5 bg-white p-5 rounded-3xl main-shadow">
      <div className="flex items-center gap-5">
        <i
          onClick={changeTaskStatus}
          className={`bi bi-${
            task.isDone ? "check-circle-fill opacity-20" : "circle"
          } text-3xl ${
            task.category
          }-text-color cursor-pointer hover:scale-125`}
        />
        <p className={`font-medium ${task.isDone ? "line-through" : ""}`}>
          {task.content}
        </p>
      </div>

      <i
        onClick={deleteTask}
        className="bi bi-trash text-3xl text-gray-200 cursor-pointer hover:text-red-400 hover:scale-125"
      />
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export { TaskCard };
