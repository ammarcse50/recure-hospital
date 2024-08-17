import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
const useDepartments = () => {
  const axiosPublic = useAxiosPublic();
  const { data: departments = [], refetch } = useQuery({
    queryKey: ["departments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/departments");
      return res.data;
    },
  });

  return [departments, refetch];
};

export default useDepartments;
