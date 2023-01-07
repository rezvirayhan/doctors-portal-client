import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import AddDoctor from "./Pages/Dashbord/AddDoctor";
import Dashbord from "./Pages/Dashbord/Dashbord";
import History from "./Pages/Dashbord/History";
import ManageDoctor from "./Pages/Dashbord/ManageDoctor";
import MyAppointments from "./Pages/Dashbord/MyAppointments";
import RequareAdmin from "./Pages/Dashbord/RequareAdmin";
import Users from "./Pages/Dashbord/Users";
import Home from "./Pages/Home/Home";
import ServiceBooking from "./Pages/Home/ServiceBooking";
import Login from "./Pages/Login/Login";
import RequareAuth from "./Pages/Login/RequareAuth";
import SignUp from "./Pages/Login/SignUp";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

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
          path="Booking/:serviceId"
          element={
            <RequareAuth>
              <ServiceBooking />
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
          <Route
            path="users"
            element={
              <RequareAdmin>
                <Users></Users>
              </RequareAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequareAdmin>
                <AddDoctor></AddDoctor>
              </RequareAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequareAdmin>
                <ManageDoctor></ManageDoctor>
              </RequareAdmin>
            }
          ></Route>
        </Route>
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
