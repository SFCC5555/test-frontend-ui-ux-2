import PropTypes from "prop-types";
import { NavBar } from "../components/NavBar";
import { CategoryCard } from "../components/CategoryCard";
import { TaskCard } from "../components/TaskCard";
import { Link } from "react-router-dom";

const HomePage = ({ user, tasks, setTasks }) => {
  const categories = ["business", "personal"];
  return (
    <div className="flex flex-col w-full items-center">
      <NavBar />
      <main className="flex flex-col gap-8 mt-20 pb-8 px-8 w-full sm:2/3 md:w-1/2">
        <h1 className="text-3xl font-bold">{`What's up?, ${user.name}!`}</h1>
        <section className="flex flex-col gap-5">
          <h3 className="text-gray-400 font-semibold text-sm">CATEGORIES</h3>
          <section className="flex items-center justify-between gap-5">
            {categories.map((category) => (
              <CategoryCard key={category} category={category} tasks={tasks} />
            ))}
          </section>
        </section>
        <section className="flex flex-col gap-5">
          <h3 className="text-gray-400 font-semibold text-sm">{`TODAY'S TASK`}</h3>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} setTasks={setTasks} />
          ))}
        </section>
      </main>
      <Link to={"/new-task"} className="fixed right-8 bottom-8 bi bi-plus-circle-fill text-blue-500 text-7xl sm:text-6xl cursor-pointer hover:scale-110" />
    </div>
  );
};

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export { HomePage };
