import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
const useDoctors = () => {
  const axiosPublic = useAxiosPublic();
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/doctors");

      return res.data;
    },
  });

  return [doctors,refetch];
};

export default useDoctors;
