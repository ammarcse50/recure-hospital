import useDoctors from '../../../hooks/useDoctors';
import DoctorCard from '../../../components/doctorCard';

const Orthopedics = () => {
    const [doctors, refetch] = useDoctors();

    const filter = doctors.filter(item => item.category === "Orthopedics")
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

export default Orthopedics;