import getConnection from "config/database";
import { prisma } from "config/client";
const handleCreateUser = async (
  name: string,
  email: string,
  address: string,
) => {
  const user = await prisma.user.create({
    data: {
      fullName: name,
      username: email,
      address: address,
      password: "...",
      accountType: "",
    }
  });
  return user;
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};
const getAllRole = async () => {
  const role = await prisma.role.findMany();
  return role;
};
const handleDeleteUser = async (id: number) => {
  const userDeleted = await prisma.user.delete({
    where: { id: id },
  });
  return userDeleted;
};
const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  return user;
};
const handleUpdateUser = async (id: number, name: string, email: string, address: string) => {
  const userUpdated = await prisma.user.update({
    where: { id: id },
    data: {
      fullName: name,
      username: email,
      address: address,
      password: "...",
      accountType: "",
    }
  });
  return userUpdated;
};
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, handleUpdateUser, getAllRole };
