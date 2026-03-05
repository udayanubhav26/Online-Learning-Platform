// src/components/CourseCard.jsx
import { Link } from "react-router-dom";
import "../styles/courses.css";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <Link to={`/courses/${course.id}`} className="view-btn">
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;