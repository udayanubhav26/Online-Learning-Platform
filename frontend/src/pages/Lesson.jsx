import { useParams } from "react-router-dom";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";
import { ProgressContext } from "../context/ProgressContext";

const Lesson = () => {
  const { id } = useParams();
  const { markComplete } = useContext(ProgressContext);

  return (
    <>
      <Navbar />
      <div className="p-10 space-y-6">
        <h1 className="text-3xl font-bold text-indigo-400">
          Lesson: {id}
        </h1>

        <VideoPlayer url="https://www.youtube.com/embed/dQw4w9WgXcQ" />

        <button
          onClick={() => markComplete(id)}
          className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Mark as Complete
        </button>
      </div>
    </>
  );
};

export default Lesson;