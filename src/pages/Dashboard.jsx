import { useState, useEffect } from "react";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  const totalStudents = students.length;

  const passedStudents = students.filter(
    (student) => student.marks >= 35
  ).length;

  const failedStudents = students.filter(
    (student) => student.marks < 35
  ).length;

  const highestMarks =
    students.length > 0
      ? Math.max(...students.map((student) => student.marks))
      : 0;

  const averageMarks =
    students.length > 0
      ? (
          students.reduce(
            (sum, student) => sum + student.marks,
            0
          ) / students.length
        ).toFixed(2)
      : 0;

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <p className="subtitle">
        Overview of Student Performance
      </p>

      <div className="dashboard-grid">

        <DashboardCard
          title="Total Students"
          value={totalStudents}
          color="#2563eb"
        />

        <DashboardCard
          title="Passed"
          value={passedStudents}
          color="green"
        />

        <DashboardCard
          title="Failed"
          value={failedStudents}
          color="red"
        />

        <DashboardCard
          title="Highest Marks"
          value={highestMarks}
          color="orange"
        />

        <DashboardCard
          title="Average Marks"
          value={averageMarks}
          color="#9333ea"
        />

      </div>

    </div>
  );
}

export default Dashboard;