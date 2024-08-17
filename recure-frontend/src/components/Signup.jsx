import { useForm } from "react-hook-form";
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";
import { sendEmailVerification, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
const image_api = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMG_KEY
}`;

const Signup = () => {
 
  const navigate = useNavigate();
  const { createUser, updateUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const imgFile = { image: data.image[0] };
    // send image to imgbb

    const res = await axios.post(image_api, imgFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // console.log(res.data.data.display_url);

    const name = data.name;
    const email = data.email;
    const password = data.password;
    const image = res.data.data.display_url;
    const userInfo = { name, email, password, image };

    createUser(email, password).then((res) => {
      updateUser(name, image);
      sendEmailVerification(res.user);

      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
         
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Your account has been created",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
    });
  };

  return (
    <div className="hero pt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-nsans-bold animate-pulse ">Register now!</h1>
          <img src="/images/auth.png" alt="" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: true })}
              className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500" role="alert">
                Email is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
              className="input input-bordered focus:border-none rounded-none border hover:border-red-500"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500" role="alert">
                Password is required
              </p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control ">
            <p className="my-2">Upload Your Image</p>
            <input
              type="file"
              {...register("image", { required: true })}
              className="focus:border-none rounded-none "
            />
            {errors.image?.type === "required" && (
              <p className="text-red-500" role="alert">
                Image is required
              </p>
            )}
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-error text-3xl text-white">
              Login
            </button>
          </div>
          <p className="text-center">
            New to here ?{" "}
            <Link to="/login" className="text-red-500 animate-pulse">
              Login
            </Link>{" "}
          </p>
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

export default Signup;
