import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <div className="hero">

        <h1>
          Student Management System
        </h1>

        <p>
          Manage student records efficiently with
          React.
        </p>

        <div className="hero-buttons">

          <Link to="/addstudent">
            <button>Add Student</button>
          </Link>

          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>

        </div>

      </div>

      <div className="features">
        <Link to="/Students">
          <div className="feature-card">
            📋
            <h2>Student Records</h2>
            <p>Add, Edit and Delete Students</p>
          </div>
        </Link> 
        <Link to="/dashboard">
          <div className="feature-card">
            📊
            <h2>Dashboard</h2>
            <p>Track Student Statistics</p>
          </div>
        </Link> 
        <Link to ="/Students">
          <div className="feature-card">
            🔍
            <h2>Search</h2>
            <p>Search and Manage Students</p>
          </div> 
        </Link>  

      </div>

    </div>
  );
}

export default Home;