import { prisma } from "config/client";
import { ACCOUNT_TYPE } from "config/constant";
import bcrypt from "bcrypt";
const saltRounds = 10;
const hashPassword = async (planText: string) =>{
  return await bcrypt.hash("123456", saltRounds);
}
const handleCreateUser = async (
  name: string,
  email: string,
  address: string,
  phone: string,
  avatar: string,
  role: string
) => {
  const defaultPassword = await hashPassword('123456');
  const user = await prisma.user.create({
    data: {
      fullName: name,
      username: email,
      address: address,
      password: defaultPassword,
      accountType: ACCOUNT_TYPE.SYSTEM,
      phone: phone,
      avatar: avatar,
      roleId : +role
    },
  });
  return user;
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};
const getAllRole = async () => {
  const roles = await prisma.role.findMany();
  return roles;
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
const handleUpdateUser = async (
  id: number,
  name: string,
  role: string,
  address: string,
  phone: string,
  avatar: string
) => {
  const userUpdated = await prisma.user.update({
    where: { id: id },
    data: {
      fullName: name,
      roleId: +role,
      address: address,
      phone: phone,
      avatar: avatar
    },
  });
  return userUpdated;
};
export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  handleUpdateUser,
  getAllRole,
  hashPassword
};
