import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const location = useLocation();

  const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes("/signup")
  return (
    <div>
      { noHeaderFooter || <Navbar></Navbar>}
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
