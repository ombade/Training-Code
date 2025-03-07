// import { useState, useReducer, useEffect } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { fetchUsers, deleteUser } from "../api";
// import { useUserStore } from "../context/UserContext";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";
// import Pagination from "./Pagination";

// type User = {
//   id: number;
//   first_name: string;
//   last_name: string;
// };

// type State = {
//   page: number;
//   sortBy: string;
// };

// type Action =
//   | { type: "SET_PAGE"; payload: number }
//   | { type: "SORT"; payload: string };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "SET_PAGE":
//       return { ...state, page: action.payload };
//     case "SORT":
//       return { ...state, sortBy: action.payload };
//     default:
//       return state;
//   }
// };

// const UserList = () => {
//   const [search, setSearch] = useState("");
//   const [state, dispatch] = useReducer(reducer, { page: 1, sortBy: "name" });
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [deletingId, setDeletingId] = useState<number | null>(null); // Track deleting ID
  
//   const queryClient = useQueryClient();
//   const { users, setUsers, deleteUser: removeUser } = useUserStore();

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["users", state.page],
//     queryFn: () => fetchUsers(state.page),
//     keepPreviousData: true, // Keep previous page data while fetching
//   });

//   useEffect(() => {
//     if (data?.data) {
//       setUsers(data.data);
//     }
//   }, [data, setUsers]);

//   const deleteMutation = useMutation({
//     mutationFn: async (id: number) => {
//       setDeletingId(id); // Set deleting ID
//       await deleteUser(id);
//     },
//     onSuccess: (_, id) => {
//       toast.success("User deleted successfully!");
//       removeUser(id); // Remove from store
//       setDeletingId(null); // Reset deleting state
//     },
//     onError: () => {
//       toast.error("Failed to delete user");
//       setDeletingId(null);
//     },
//   });

//   if (isLoading) return <p>Loading users...</p>;
//   if (isError) return <p className="text-red-500">Error loading users.</p>;

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search users..."
//         className="border p-2 my-3 w-full"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <table className="min-w-full border">
//         <thead>
//           <tr>
//             <th onClick={() => dispatch({ type: "SORT", payload: "name" })} className="cursor-pointer">
//               Name ⬍
//             </th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users
//             ?.filter((user) =>
//               user?.first_name?.toLowerCase().includes(search.toLowerCase())
//             )
//             .map((user) => (
//               <tr key={user.id}>
//                 <td>{user.first_name} {user.last_name}</td>
//                 <td>
//                   <button
//                     className="bg-blue-500 text-white px-3 py-1"
//                     onClick={() => setSelectedUser(user)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-3 py-1 ml-2"
//                     onClick={() => user.id !== undefined && deleteMutation.mutate(user.id)}
//                     disabled={deletingId === user.id} // Disable only for this user
//                   >
//                     {deletingId === user.id ? "Deleting..." : "Delete"}
//                   </button>
//                   <Link to={`/users/${user.id}`} className="text-green-500 ml-2">
//                     View
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <Pagination page={state.page} setPage={(p) => dispatch({ type: "SET_PAGE", payload: p })} />
//     </div>
//   );
// };

// export default UserList;






import { useState, useReducer, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchUsers, deleteUser } from "../api";
import { useUserStore } from "../context/UserContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import UserForm from "./UserForm"; // Import the form component

const UserList = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user for editing
  const [deletingId, setDeletingId] = useState<number | null>(null); // Track deleting ID
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_PAGE":
        return { ...state, page: action.payload };
      case "SORT":
        return { ...state, sortBy: action.payload };
      default:
        return state;
    }
  }, { page: 1, sortBy: "name" });

  const { users, setUsers, deleteUser: removeUser } = useUserStore();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", state.page],
    queryFn: () => fetchUsers(state.page),
    keepPreviousData: true, // Keep previous page data while fetching
  });

  useEffect(() => {
    if (data?.data) {
      setUsers(data.data);
    }
  }, [data, setUsers]);

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      setDeletingId(id);
      await deleteUser(id);
    },
    onSuccess: (_, id) => {
      toast.success("User deleted successfully!");
      removeUser(id);
      setDeletingId(null);
    },
    onError: () => {
      toast.error("Failed to delete user");
      setDeletingId(null);
    },
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p className="text-red-500">Error loading users.</p>;

  return (
    <div>
      <UserForm editingUser={selectedUser} setEditingUser={setSelectedUser} /> 

      <input
        type="text"
        placeholder="Search users..."
        className="border p-2 my-3 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="min-w-full border">
        <thead>
          <tr>
            <th onClick={() => dispatch({ type: "SORT", payload: "name" })} className="cursor-pointer">
              Name ⬍
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            ?.filter((user) =>
              user?.first_name?.toLowerCase().includes(search.toLowerCase())
            )
            .map((user) => (
              <tr key={user.id}>
                <td>{user.first_name} {user.last_name}</td>
                <td>
                  <button
                    className="bg-blue-500 text-white px-3 py-1"
                    onClick={() => setSelectedUser(user)} // Set user for editing
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 ml-2"
                    onClick={() => deleteMutation.mutate(user.id)}
                    disabled={deletingId === user.id}
                  >
                    {deletingId === user.id ? "Deleting..." : "Delete"}
                  </button>
                  <Link to={`/users/${user.id}`} className="text-green-500 ml-2">
                    View
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination page={state.page} setPage={(p) => dispatch({ type: "SET_PAGE", payload: p })} />
    </div>
  );
};

export default UserList;
