import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
const Dashbord = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className="text-4xl font-bold">Our Dashbord</h2>
        <Outlet></Outlet>
        <label
          for="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashbord">My Appointment's</Link>
          </li>
          { admin && <li><Link to="/dashbord/users">All User</Link></li>}
          { admin && <li><Link to="/dashbord/addDoctor">Add A Doctor</Link></li>}
          { admin && <li><Link to="/dashbord/manageDoctor">Manage Doctor</Link></li>}
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
