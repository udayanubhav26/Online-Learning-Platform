import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
          Upgrade Your Skills 🚀
        </h1>
        <p style={{ opacity: 0.7, marginBottom: "30px" }}>
          Learn modern development with interactive courses.
        </p>
       <Link to="/courses" className="explore-btn">
           Explore Courses
       </Link>
      </div>
    </Layout>
  );
};

export default Home;