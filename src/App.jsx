import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import Students from "./pages/Students";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/students" element={<Students />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;