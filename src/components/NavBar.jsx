import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [notificationsStatus, setNotificationsStatus] = useState(false);
  const [searchStatus, setSearchStatus] = useState(false);
  return (
    <nav className=" main-bg-color fixed w-full flex items-center justify-between px-8 sm:px-4 py-4 sm:py-2 sm:border-b-2">
      <div className="flex items-center gap-4">
        <Link
          to={"/profile"}
          className="bi bi-list text-2xl cursor-pointer hover:scale-125"
        />
        <h2 className="text-2xl font-bold hidden sm:block">ToDo-App</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {searchStatus && (
            <input
              id="search"
              type="search"
              placeholder="Search a task"
              className="px-4 py-1 rounded-md text-sm border-2"
            />
          )}

          <label
            htmlFor="search"
            onClick={() => setSearchStatus((prev) => !prev)}
            className="bi bi-search text-xl cursor-pointer hover:scale-125"
          />
        </div>
        <i
          onClick={() => setNotificationsStatus((prev) => !prev)}
          className={`bi bi-bell${
            notificationsStatus ? "-fill" : ""
          } text-xl cursor-pointer hover:scale-125`}
        />
      </div>
    </nav>
  );
};

export { NavBar };
