import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<{ data: User[] }>('https://reqres.in/api/users');
  return data.data;
};

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};