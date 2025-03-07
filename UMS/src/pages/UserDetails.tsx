import { useQuery } from "@tanstack/react-query";
import { useParams ,Link } from "react-router-dom";
import API from "../services/api";

const UserDetails = () => {
  const { id } = useParams();

  const { data :user, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => API.get(`/users/${id}`).then((res) => res.data.data),
  });

  if (isLoading) return <p>Loading user details...</p>;
  if (error) return <p>Error fetching user details</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img src={user.avatar} alt="Avatar" className="w-20 h-20 rounded-full mx-auto" />
      <h2 className="text-xl font-bold text-center mt-2">{user.first_name} {user.last_name}</h2>
      <p className="text-center text-gray-600">{user.email}</p>
      <Link to="/dashboard" className="block text-center text-blue-500 mt-4">Back</Link>
    </div>
  );
};

export default UserDetails;
