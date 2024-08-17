import { Link } from "react-router-dom";

const MedicalDepartment = () => {
  return (
    <div className="z-0">
      <div >
        <h1 className="md:text-5xl text-3xl font-nsans-bold mt-10">
          Medical Departments
        </h1>
        <span className="font-nsans-medium">The Backbone of our Hospital</span>
      </div>
      <div className="md:flex gap-3 my-10 ">
        {/* CARD-1  */}
        <div className="card glass w-96 mx-auto">
          <figure>
            <img
              src="/images/surgery.jpg"
              alt="car!"
              className="h-[300px] w-full"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">SURGERY</h2>
          </div>
        </div>
        {/* CARD-2  */}
        <div className="card glass w-96 mx-auto">
          <figure>
            <img
              src="/images/radiology.jpg"
              alt="car!"
              className="h-[300px] w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">RADIOLOGY & IMAGING</h2>
          </div>
        </div>
        {/* CARD-3  */}
        <div className="card glass w-96 mx-auto">
          <figure>
            <img
              src="/images/pathology.jpg"
              alt="car!"
              className="h-[300px] w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">PATHOLOGY</h2>
          </div>
        </div>

        {/* MORE  */}

        <div>
          <h1 className="font-nsans-medium md:text-3xl">MODERN EQUIPMENT</h1>
          <span className="divider divider-error"></span>
          <h1>CHECKOUT ALL DEPARTMENTS</h1>
          <Link to="/departments" id="departments"> <button className="btn btn-outline btn-error">MORE </button></Link>
        </div>
      </div>
    </div>
  );
};

export default MedicalDepartment;
