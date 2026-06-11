import { useContext } from "react";
import Navbar from "../components/Navbar";
import { ProgressContext } from "../context/ProgressContext";

const Dashboard = () => {
  const { completedLessons } = useContext(ProgressContext);

  return (
    <>
      <Navbar />
      <div className="p-10 text-white">
        <h1 className="text-3xl font-bold text-indigo-400 mb-6">
          Your Dashboard
        </h1>

        <p className="text-lg">
          Completed Lessons: {completedLessons.length}
        </p>

        <ul className="mt-4 space-y-2">
          {completedLessons.map((lesson) => (
            <li key={lesson} className="bg-gray-800 p-3 rounded-lg">
              {lesson}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;