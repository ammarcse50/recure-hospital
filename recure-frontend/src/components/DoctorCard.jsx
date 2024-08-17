const DoctorCard = ({ doctor }) => {
  const { image, name, qualifications, position, room_no, serial, time } =
    doctor;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p>
          <span className="font-nsans-medium">{name}</span> <br />
          <span>{qualifications}</span> <br />
          <span>{position}</span><br />
          <span>{room_no}</span><br />
          <span>{serial}</span><br />
          <span>{time}</span><br />
        </p>
        {/* <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
      </div>
    </div>
  );
};

export default DoctorCard;
