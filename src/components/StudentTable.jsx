function StudentTable({ students, deleteStudent }) {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Department</th>
          <th>Marks</th>
          <th>Grade</th>
          <th>Result</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.rollNo}</td>
            <td>{student.name}</td>
            <td>{student.department}</td>
            <td>{student.marks}</td>
            <td>{student.grade}</td>
            <td>{student.result}</td>
            <td>
              <button
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;