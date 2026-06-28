import { useState } from "react";

function StudentForm() {
  const [student, setStudent] = useState({
    rollNo: "",
    name: "",
    department: "",
    email: "",
    phone: "",
    marks: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const getGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    if (marks >= 35) return "D";
    return "F";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { rollNo, name, department, email, phone, marks } = student;

    if (!rollNo || !name || !department || !email || !phone || !marks) {
      setMessage("Please fill all fields.");
      return;
    }

    const marksNumber = Number(marks);

    const newStudent = {
      id: Date.now(),
      studentId: "STU" + Math.floor(Math.random() * 10000),
      rollNo,
      name,
      department,
      email,
      phone,
      marks: marksNumber,
      result: marksNumber >= 35 ? "Pass" : "Fail",
      grade: getGrade(marksNumber),
    };

    const existingStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    existingStudents.push(newStudent);

    localStorage.setItem("students", JSON.stringify(existingStudents));

    setMessage("Student Added Successfully!");

    setStudent({
      rollNo: "",
      name: "",
      department: "",
      email: "",
      phone: "",
      marks: "",
    });
  };

  return (
    <div className="form-container">
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Roll Number"
          name="rollNo"
          value={student.rollNo}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Student Name"
          name="name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Department"
          name="department"
          value={student.department}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={student.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={student.phone}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Marks"
          name="marks"
          value={student.marks}
          onChange={handleChange}
        />

        <button type="submit">Add Student</button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default StudentForm;