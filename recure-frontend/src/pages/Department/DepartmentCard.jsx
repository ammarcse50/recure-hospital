import { Link } from "react-router-dom";

const DepartmentCard = ({data}) => {
    const {image,department} = data;
  
      

    return (
        <div className="card glass w-96">
        <figure>
          <img
            src={image}
            alt="department!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center mb-3 ">{department}</h2>
          <div className="card-actions justify-center">
         <Link to={`/${department}`}> <button  className="btn text-white btn-error">MORE</button></Link>  
          </div>
        </div>
      </div>
    );
};

export default DepartmentCard;