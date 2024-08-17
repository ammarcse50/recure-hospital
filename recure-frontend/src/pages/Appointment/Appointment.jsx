import { useForm } from "react-hook-form";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Appointment = () => { 
   const axiosPublic = useAxiosPublic();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const number = data.number;
    const nic = data.nic;
    const dob = data.dob;
    const gender = data.gender;
    const appointDate = data.appointDate;
    const appointTime = data.appointTime;
    const departmentName = data.departmentName;
    const doctorName = data.doctorName;
    const address = data.address;

    const appointmentInfo = {
      firstName,
      lastName,
      email,
      number,
      nic,
      dob,
      gender,
      appointDate,
      appointTime,
      departmentName,
      doctorName,
      address,
    };


    axiosPublic.post("/appointments", appointmentInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: "Your appoint has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
  };

  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <div className="text-center lg:text-left">
        <h1 className="text-5xl font-nsans-bold animate-pulse">Login now!</h1>
        <img src="/images/auth.png" alt="" />
      </div> */}

        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
          {/* FirstName && LastName  */}
          <div className="flex">
            <div className="form-control w-full mr-2">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              />
              {errors.firstName?.type === "required" && (
                <p className="text-red-500" role="alert">
                  FirstName is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              />
              {errors.lastName?.type === "required" && (
                <p className="text-red-500" role="alert">
                  LastName is required
                </p>
              )}
            </div>
          </div>

          {/* Email & Number  */}

          <div className="flex">
            <div className="form-control w-full mr-2">
              <input
                type="email"
                // ref={emailRef}
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <input
                type="number"
                // ref={emailRef}
                placeholder="Mobile Number"
                {...register("number", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              />
              {errors.number?.type === "required" && (
                <p className="text-red-500" role="alert">
                  Number is required
                </p>
              )}
            </div>
          </div>

          {/* NIC && DATE OF BIRTH */}

          <div className="flex">
            <div className="form-control w-full mr-2">
              <input
                type="number"
                // ref={emailRef}
                placeholder="NIC"
                {...register("nic", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              />
              {errors.nic?.type === "required" && (
                <p className="text-red-500" role="alert">
                  NIC is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <input
                type="date"
                // ref={emailRef}
                placeholder="DATE OF BIRTH"
                {...register("dob", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              />
              {errors.date?.type === "required" && (
                <p className="text-red-500" role="alert">
                  DOB is required
                </p>
              )}
            </div>
          </div>

          {/* GENDER , APPOINTMENT */}

          <div className="flex">
            <div className="form-control w-full mr-2">
              <select
                id="gender"
                placeholder="Gender"
                {...register("gender", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {/* <input
                type="select"
                // ref={emailRef}
                placeholder="Gender"
                {...register("gender", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              /> */}
              {errors.gender?.type === "required" && (
                <p className="text-red-500" role="alert">
                  Gender is required
                </p>
              )}
            </div>
            <div className="form-control w-full mr-2">
              <input
                type="date"
                // ref={emailRef}
                placeholder="APPOINTMENT DATE"
                {...register("appointDate", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              />
              {errors.appointDate?.type === "required" && (
                <p className="text-red-500" role="alert">
                  appointDate is required
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <input
                type="time"
                // ref={emailRef}
                placeholder="Appointment Time"
                {...register("appointTime", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              />
              {errors.appointTime?.type === "required" && (
                <p className="text-red-500" role="alert">
                  AppointmentTime is required
                </p>
              )}
            </div>
          </div>
          {/* DepartmentName and Doctor Name */}

          <div className="flex ">
            <div className="form-control w-full  mr-2">
              <select
                id="gender"
                placeholder="Department Name"
                {...register("departmentName", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              >
                <option value="">Department Name</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Physical Medicine">Physical Medicine</option>
                <option value="Surgery">Surgery</option>
                <option value="Gynecology & Obstetrics">
                  Gynecology & Obstetrics
                </option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Medicine">Medicine</option>
                <option value="Urology">Urology</option>
              </select>

              {errors.departmentName?.type === "required" && (
                <p className="text-red-500" role="alert">
                  DepartmentName is required
                </p>
              )}
            </div>
            <div className="form-control w-full ">
              <select
                placeholder="Doctor Name"
                {...register("doctorName", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              >
                <option value="">Doctor Name</option>
                <option value="Neurology">Dr. A. H. Karim</option>
                <option value="Dr. A. H. Karim">Dr. A. H. Karim</option>
                <option value="Dr. Saifuddin Chowdhury">
                  Dr. Saifuddin Chowdhury
                </option>
                <option value="Dr. A. F. Nizam">Dr. A. F. Nizam</option>
                <option value="Dr. M. S. Hasan">Dr. M. S. Hasan</option>
                <option value="Dr. S. R. Faruque">Dr. S. R. Faruque</option>
                <option value="Dr. A. S. M. Zahed">Dr. A. S. M. Zahed</option>
                <option value="Dr. Mohammad Moinuddin Chowdhury">
                  Dr. Mohammad Moinuddin Chowdhury
                </option>
                <option value="Dr. Mohammad Rezaul Karim">
                  Dr. Mohammad Rezaul Karim
                </option>
                <option value="Dr. Saifuddin Mahmud">
                  Dr. Saifuddin Mahmud
                </option>
                <option value="Dr Mohammad Farhad">Dr Mohammad Farhad</option>
                <option value="Dr. Istiak Ahmad">Dr. Istiak Ahmad</option>
                <option value="Dr. Suman Sarkar">Dr. Suman Sarkar</option>
                <option value="Dr. A. R. Islam">Dr. A. R. Islam</option>
              </select>

              {errors.doctorName?.type === "required" && (
                <p className="text-red-500" role="alert">
                  DoctorName is required
                </p>
              )}
            </div>
          </div>
          {/* Address  */}
          <div className="form-control w-full">
            <textarea
              placeholder="Address"
              {...register("address", { required: true })}
              className="input input-bordered focus:border-none rounded-none border hover:border-red-500 h-24"
            ></textarea>
            {errors.address?.type === "required" && (
              <p className="text-red-500" role="alert">
                Address is required
              </p>
            )}
          </div>

          <div className="form-control w-full mt-6">
            <button type="submit" className="btn btn-error text-3xl text-white">
              Submit
            </button>
          </div>

          <Link to={"/"} className="mx-auto">
            <span>
              {" "}
              <FaHome className="text-5xl text-red-400 text-center" />
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
