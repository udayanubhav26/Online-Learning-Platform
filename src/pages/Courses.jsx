// src/pages/Course.jsx
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/courses.css";
import CourseCard from "../components/coursecard";

const courses = [
  {
    id: 1,
    title: "React Mastery",
    description: "Complete React course with hooks and projects.",
    image: "https://via.placeholder.com/300x180.png?text=React+Mastery",
    video: "https://www.youtube.com/embed/bMknfKXIFA8",
  },
  {
    id: 2,
    title: "Node.js Backend",
    description: "Build backend APIs with Express & MongoDB.",
    image: "https://via.placeholder.com/300x180.png?text=Node.js+Backend",
    video: "https://www.youtube.com/embed/Oe421EPjeBE",
  },
  {
    id: 3,
    title: "Full Stack Development",
    description: "Master MERN stack from scratch.",
    image: "https://via.placeholder.com/300x180.png?text=Full+Stack",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
  },
];

const Course = () => {
  const { id } = useParams();
  const courseId = id ? Number(id) : null;
  const course = courses.find((c) => c.id === courseId);

  return (
    <Layout>
      {courseId && course ? (
        <div className="course-detail-container">
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div className="video-wrapper">
            <iframe
              src={course.video}
              title={course.title}
              allowFullScreen
            ></iframe>
          </div>
          <Link to="/courses" className="back-btn">
            ← Back to Courses
          </Link>
        </div>
      ) : (
        <div className="courses-container">
          <h1 className="courses-title">All Courses</h1>
          <div className="courses-grid">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Course;