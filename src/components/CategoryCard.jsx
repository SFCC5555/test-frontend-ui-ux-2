import PropTypes from "prop-types";
const CategoryCard = ({ category, tasks }) => {
  const categoryTasks = tasks.filter((task) => task.category === category);
  const doneTasks = categoryTasks.filter((task) => task.isDone);

  const percentage = parseInt((doneTasks.length * 100) / categoryTasks.length);
  return (
    <div className="bg-white w-44 rounded-2xl p-4 flex flex-col main-shadow">
      <div className="text-gray-400">
        {categoryTasks.length} task{categoryTasks.length === 1 ? "" : "s"}
      </div>
      <div className="text-2xl font-bold">
        {category[0].toUpperCase() + category.slice(1)}
      </div>
      <div className="w-full h-1 mt-4 bg-blue-50 rounded-md">
        <div
          className={`h-1 percentage-w-${percentage} ${category}-shadow ${category}-bg-color rounded-md`}
        />
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};

export { CategoryCard };
