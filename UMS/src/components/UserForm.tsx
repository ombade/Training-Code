
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createUser, updateUser } from "../api";
import { toast } from 'react-toastify';
import { useEffect } from "react";
import { useUserStore } from '../context/UserContext';

const UserForm = ({ editingUser, setEditingUser }: { editingUser?: any; setEditingUser?: any }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: editingUser || {} });

  useEffect(() => {
    reset(editingUser || {}); // Reset form when user changes
  }, [editingUser, reset]);

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      toast.success("User created successfully");
      useUserStore.getState().addUser(newUser);
      reset();
    },
    onError: () => toast.error("Error creating user"),
  });

  const updateMutation = useMutation({
    mutationFn: async (data: any) => {
      if (!editingUser) return;
      return updateUser(editingUser.id, data);
    },
    onSuccess: (updatedUser) => {
      toast.success("User updated successfully");
      useUserStore.getState().updateUser(updatedUser);
      setEditingUser(null); // Exit edit mode
      reset();
    },
    onError: () => toast.error("Error updating user"),
  });

  const onSubmit = (data: any) => {
    if (editingUser) {
      updateMutation.mutate(data);
    } else {
      createMutation.mutate(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input {...register("first_name", { required: true })} placeholder="First Name" className="border p-2" />
      <input {...register("last_name", { required: true })} placeholder="Last Name" className="border p-2 ml-2" />
      <button type="submit" className="bg-green-500 text-white p-2 ml-2">
        {editingUser ? "Update" : "Create"}
      </button>
      {editingUser && (
        <button
          type="button"
          className="bg-gray-500 text-white p-2 ml-2"
          onClick={() => {
            setEditingUser(null);
            reset();
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default UserForm;

