import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import Pagination from '../components/Pagination';
import axios from 'axios';
import { useUserStore } from '../context/UserContext';

const Dashboard = () => {
  const [editingUser, setEditingUser] = useState(null);
  const { setUsers } = useUserStore();
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setUsers(res.data.data);
    });
  }, [page, setUsers]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      {/* <UserForm editingUser={editingUser} setEditingUser={setEditingUser} /> */}
      <UserList setEditingUser={setEditingUser} />
      {/* <Pagination page={page} setPage={setPage} /> */}
    </div>
  );
};

export default Dashboard;
