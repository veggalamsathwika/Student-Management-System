import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-box">
        <span className="logo-icon">🎓</span>
        <h2 className="logo-text">StudentHub</h2>
      </div>

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/addstudent">Add Student</NavLink></li>
        <li><NavLink to="/students">Students</NavLink></li>

        <li>
          <div className="logout-container">
            <button className="logout-btn">
              ⎋
            </button>
            <span className="logout-text">Logout</span>
          </div>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;