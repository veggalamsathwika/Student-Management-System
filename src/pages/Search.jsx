import { useState, useEffect } from "react";

function Search() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  const handleSearch = () => {
    const filtered = students.filter(
      (student) =>
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(search.toLowerCase())
    );

    setResult(filtered);
  };

  return (
    <div className="page">
      <h1>Search Student</h1>

      <input
        type="text"
        placeholder="Enter Name or Roll No"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <table className="student-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Marks</th>
            <th>Result</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {result.map((student) => (
            <tr key={student.id}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
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

export default Search;