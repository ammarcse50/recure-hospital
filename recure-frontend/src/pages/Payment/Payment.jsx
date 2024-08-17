import { useForm } from "react-hook-form";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Payment = () => {
    const axiosPublic = useAxiosPublic();


    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      const name = data.name;
      const lastName = data.lastName;
      const email = data.email;
      const number = data.number;
      const taka = data.taka;
 
      const address = data.address;
  
      const appointmentInfo = {
        name,
        lastName,
        email,
        number,
        taka,
        address,
      };
     
       console.log(appointmentInfo)
  
    //   axiosPublic.post("/appointments", appointmentInfo).then((res) => {
    //     if (res.data.insertedId) {
    //       Swal.fire({
    //         position: "top-middle",
    //         icon: "success",
    //         title: "Your appoint has been saved",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //       reset();
    //     }
    //   });
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
                placeholder="Name"
                {...register("name", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500" role="alert">
                Name is required
                </p>
              )}
            </div>
            <div className="form-control w-full mr-2">
              <input
                type="currency"
                placeholder="BDT"
                {...register("taka", { required: true })}
                className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
              />
              {errors.taka?.type === "required" && (
                <p className="text-red-500" role="alert">
             taka is required
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

export default Payment;