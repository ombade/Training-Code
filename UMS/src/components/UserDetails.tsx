import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { fetchUserById } from "../api";

const UserDetails = () => {
  const { id } = useParams();
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id!),
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">User not found</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img src={user.avatar} alt="Avatar" className="w-20 h-20 rounded-full mx-auto" />
      <h2 className="text-xl font-bold text-center mt-2">{user.first_name} {user.last_name}</h2>
      <p className="text-center text-gray-600">{user.email}</p>
      <Link to="/" className="block text-center text-blue-500 mt-4">Back</Link>
    </div>
  );
};

export default UserDetails;
