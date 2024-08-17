import DoctorCard from "../../../components/doctorCard";
import useDoctors from "../../../hooks/useDoctors";

const Medicine = () => {
  const [doctors, refetch] = useDoctors();

  const filter = doctors.filter(item => item.category === "Medicine")
  console.log(filter)

  console.log("from medicine page",doctors)
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-3">
        {filter.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default Medicine;
