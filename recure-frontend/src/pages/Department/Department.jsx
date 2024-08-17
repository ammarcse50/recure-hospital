import useDepartments from "../../hooks/useDepartments";
import DepartmentCard from "../../pages/Department/DepartmentCard"
const Department = () => {
    const [departments,refetch] = useDepartments()

    
    return (
        <div id="departments" className="my-10">

        <div className="grid lg:grid-cols-3 gap-3">
            {departments.map(department=>
                <DepartmentCard key={department._id} data={department}></DepartmentCard>
            )}
        </div>
            
            
        </div>
    );
};

export default Department;