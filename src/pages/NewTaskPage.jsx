import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const NewTaskPage = ({ setTasks }) => {
  const navigate = useNavigate();
  const [taskContent, setTaskContent] = useState("");
  const [category, setCategory] = useState("personal");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    setTaskContent(e.target.value);
  };

  const changeCategory = () => {
    setCategory((prev) => (prev === "personal" ? "business" : "personal"));
  };

  const addNewTask = () => {
    if (taskContent) {
      setTasks((prev) => {
        const newTask = {
          id: uuidv4(),
          content: taskContent,
          category: category,
          isDone: false,
        };

        const updatedTasks = [...prev, newTask];
        return updatedTasks;
      });
      navigate("/");
    } else {
      setError(true);
    }
  };
  return (
    <main className="relative flex flex-col justify-center gap-8 py-4 px-16 w-full sm:2/3 md:w-1/2 sm:rounded-3xl text-center sm:my-8 bg-white">
      <Link
        to={"/"}
        className="absolute right-12 top-14 sm:right-8 sm:top-8 bi bi-x-circle text-5xl cursor-pointer opacity-70 hover:scale-110 hover:opacity-100 text-gray-500"
      />
      <section className="flex flex-col justify-between gap-4 h-1/2 ">
        <textarea
          onChange={handleChange}
          className="text-2xl p-2 min-h-14"
          placeholder="Enter a new task"
          value={taskContent}
          maxLength={99}
        />
        {error && <p className="-translate-y-7 px-2 text-red-400 self-start">{`Can't be blank`}</p>}
        <div className="flex items-center gap-4">
          <button className="flex gap-4 text-gray-400 border-2 px-3 py-2 rounded-2xl hover:scale-110">
            <i className="bi bi-calendar4" />
            Today
          </button>
          <div className="flex items-center gap-4 text-gray-400">
            <i
              onClick={changeCategory}
              className={`bi bi-circle text-4xl cursor-pointer ${category}-text-color hover:scale-125`}
            />
            {category[0].toUpperCase() + category.slice(1)}
          </div>
        </div>

        <div className="flex items-center gap-8 self-center text-gray-400 text-xl">
          <i className="bi bi-folder-plus cursor-pointer hover:scale-125" />
          <i className="bi bi-flag cursor-pointer hover:scale-125" />
          <i className="bi bi-moon cursor-pointer hover:scale-125" />
        </div>
      </section>
      <button
        onClick={addNewTask}
        className="absolute flex gap-4 font-medium right-12 bottom-14 sm:right-8 sm:bottom-8 bg-blue-500 text-white rounded-3xl text-lg px-8 py-4 hover:scale-105"
      >
        New task <i className="bi bi-chevron-up" />
      </button>
    </main>
  );
};

NewTaskPage.propTypes = {
  setTasks: PropTypes.func.isRequired,
};

export { NewTaskPage };
