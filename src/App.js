import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./compontents/NavBar";
import AllStudents from "./compontents/AllStudent";
import AddStudent from "./compontents/AddStudent";
import ViewStudent from "./compontents/ViewStudent";
// import Home from "./components/Home";
import Home from "./compontents/Home"

function App() {
  return (
    <div className="">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/allstudents" element={<AllStudents />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/viewstud" element={<ViewStudent />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;