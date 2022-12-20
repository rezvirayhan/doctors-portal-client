import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Appointment from "./Pages/Appointment/Appointment";
import RequareAuth from "./Pages/Login/RequareAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashbord from "./Pages/Dashbord/Dashbord";
import MyAppointments from "./Pages/Dashbord/MyAppointments";
import MyReview from "./Pages/Dashbord/MyReview";
import History from "./Pages/Dashbord/History";
import Users from "./Pages/Dashbord/Users";
import RequareAdmin from "./Pages/Dashbord/RequareAdmin";
import AddDoctor from "./Pages/Dashbord/AddDoctor";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route
          path="appointment"
          element={
            <RequareAuth>
              <Appointment />
            </RequareAuth>
          }
        />
        <Route
          path="dashbord"
          element={
            <RequareAuth>
              <Dashbord />
            </RequareAuth>
          }
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<History></History>}></Route>
          <Route path="users" element={<RequareAdmin><Users></Users></RequareAdmin>}></Route>
          <Route path="addDoctor" element={<RequareAdmin><AddDoctor></AddDoctor></RequareAdmin>}></Route>
        </Route>

        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
