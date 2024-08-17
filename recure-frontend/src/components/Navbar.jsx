import Headroom from "react-headroom";
import { MdCall } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const styleNavLinks = ({ isActive }) => ({
  backgroundColor: isActive ? "red" : "transparent",
});

const navLinks = (
  <>
    <li>
      <NavLink to={"/"} style={styleNavLinks}>
        HOME
      </NavLink>
    </li>
    <li>
      <NavLink to={"/about"} style={styleNavLinks}>
        ABOUT
      </NavLink>
    </li>
    <li>
      <NavLink to={"/appointment"} style={styleNavLinks}>
        APPOINTMENT
      </NavLink>
    </li>
    <li>
      <NavLink to={"/departments"} style={styleNavLinks}>
        DEPARTMENT
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logOut();
    navigate("/");
  };

  return (
    <>
      <div className="flex  justify-between items-center p-2 border border-black">
        <details className="dropdown">
          <summary className="m-1">FAQ</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[5] w-58 p-2 shadow">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                EMERGENCY INFORMATION
              </div>
              <div className="collapse-content">
                <p>
                  If you are an emergency case requiring immediate attention or
                  Ambulance, please call 02-334455071-6, 02-334451901-6,
                  +88001976-022333, +88001976-022111 . We will give you
                  instructions and directions. If you know the Recure Hospital’
                  s address, please come as quick as possible. If you need
                  transfer by us, please let us know by phone.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                HOW'S THE RENT AND INVESTIGATION/CONSULTATION PRICE IN RECURE
                HOSPITAL?
              </div>
              <div className="collapse-content">
                <p>
                  You can check Parkview Hospital Service, Bed Charge &
                  Investigation online easily. To Check Bed Charge – Click this
                  Link. To Check Investigation Price – Click this Link.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                WHAT HAPPENS IF I AM A NEW PATIENT?
              </div>
              <div className="collapse-content">
                <p>
                  You may have referred yourself, have been referred by another
                  specialist or by Medical Insurance. We will discuss your
                  problem and ask about your medical history. A thorough
                  examination will then follow. We may request examinations and
                  tests to assist and support our diagnosis. X-rays, blood /
                  urine analysis, ultrasonography, MRI, endoscopy can all be
                  performed with no delay in the same building. If you have
                  previous examinations and tests related to your current
                  condition, please bring those along to the consultation. Also
                  bring any copies of letters from other doctors or recent
                  medication. It will help us to help you. We will discuss with
                  you the results of your examinations and we will recommend the
                  proper treatment. Some conditions may be faced immediately by
                  conservative or surgical treatment. In case you need surgery
                  requiring general anesthesia, we arrange routine or urgent
                  transfer by quick boat, state or private air ambulance to
                  Athens or to your preferred destination (subject to stable
                  medical condition). In special cases a patient can be
                  escorted. Otherwise, depending on the results of your
                  examinations, the nature of the medical problem and your
                  holiday plan, we will discharge you from our clinic, refer you
                  on to another health professional or book you for surgery. If
                  follow-up consultation or further consultations are required,
                  we will indicate this and the staff will let you know the date
                  and time of your next appointment.
                </p>
              </div>
            </div>
          </ul>
        </details>
        <h1 className="flex items-center">
          Emergency: <MdCall className="ml-2" /> +88018*********
        </h1>
      </div>
      <Headroom className="z-[1]">
        {" "}
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="red"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-nsans-bold"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/">
              <img src="/images/logo.png" className="w-24" alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-nsans-bold">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end ">
            {user ? (
              <>
                <button onClick={handleLogOut} className=" btn mr-3 btn-outline btn-error">
                  Log Out
                </button>
                <div className="avatar online">
                  <div className="w-[50px] rounded-full">
                    <img src={user?.photoURL} className="" alt="" />
                  </div>
                </div>
              </>
            ) : (
              <Link className=" btn mr-3 btn-outline btn-error" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>{" "}
      </Headroom>
    </>
  );
};

export default Navbar;
