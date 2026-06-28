import { useState, useEffect } from "react";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Students List</h1>

      <input
        type="text"
        placeholder="Search by Name or Roll No"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "12px",
          width: "300px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid gray"
        }}
      />

      <table className="student-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Marks</th>
            <th>Result</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.marks}</td>
              <td>{student.result}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;