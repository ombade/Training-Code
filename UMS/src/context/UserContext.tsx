import { create } from 'zustand';
import { User } from '../types';

type UserState = {
  users: User[];
  editingUser: User | null;
  setEditingUser: (user: User | null) => void;
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: number) => void;
  setUsers: (users: User[]) => void;
};

export const useUserStore = create<UserState>((set) => ({
  users: [],
  editingUser: null,
  setEditingUser: (user) => set({ editingUser: user }),
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  setUsers: (users) => set({ users }),
}));

