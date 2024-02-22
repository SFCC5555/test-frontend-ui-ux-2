import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import goodConsistencyImage from "../assets/goodConsistency.png";

const ProfilePage = ({ user }) => {
  return (
    <main className="w-full flex items-center justify-center gap-4 dark-bg-color">
      <div className="relative flex flex-col justify-between gap-4 py-16 px-16 h-full w-full sm:2/3 md:w-1/2">
        <Link
          to={"/"}
          className="absolute right-12 top-14 sm:right-8 sm:top-8 bi bi-arrow-left-circle text-5xl cursor-pointer opacity-70 hover:scale-110 hover:opacity-100 text-gray-300"
        />
        <div className="w-24 h-24 rounded-full p-1 business-border-color border-4">
          <div className="w-full h-full flex justify-center items-center personal-bg-color rounded-full text-white text-5xl font-semibold">
            {user.name[0]}
          </div>
        </div>
        <div className="text-white text-5xl font-semibold">
          <div>{user.name}</div>
          <div>{user.lastName}</div>
        </div>
        <section className="text-gray-400 flex flex-col gap-4 font-medium">
          <div className="flex items-center gap-4 cursor-pointer hover:scale-105">
            <i className="text-gray-500 bi bi-bookmark" /> Templates
          </div>
          <div className="flex items-center gap-4 cursor-pointer hover:scale-105">
            <i className="text-gray-500 bi bi-grid" /> Categories
          </div>
          <div className="flex items-center gap-4 cursor-pointer hover:scale-105">
            <i className="text-gray-500 bi bi-pie-chart" /> Analytics
          </div>
          <div className="flex items-center gap-4 cursor-pointer hover:scale-105">
            <i className="text-gray-500 bi bi-gear" /> Settings
          </div>
        </section>
        <img
          alt="consistency-image"
          src={goodConsistencyImage}
          className="w-48"
        />
        <div className="font-medium">
          <p className="text-gray-500">Good</p>
          <p className="text-gray-300 text-xl">Concistency</p>
        </div>
      </div>
    </main>
  );
};

ProfilePage.propTypes = {
  user: PropTypes.object.isRequired,
};

export { ProfilePage };
