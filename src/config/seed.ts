import { prisma } from "./client";
import { ACCOUNT_TYPE } from "./constant";
import { hashPassword } from "services/userServices";
const initDatabase = async () => {
  const countUser = await prisma.user.count();
  const countRole = await prisma.role.count();
  if (countRole === 0) {
    await prisma.role.createMany({
      data: [
        {
          name: "Admin",
          description: "Admin full quyền",
        },
        {
          name: "User",
          description: "User thông thường",
        },
      ],
    });
  }
  if (countUser === 0) {
    const defaultPassword = await hashPassword("123456");
    const adminRole = await prisma.role.findFirst({
      where: { name: "ADMIN" },
    });
    if (adminRole)
      await prisma.user.createMany({
        data: [
          {
            fullName: "John Doe",
            username: "johndoe@example.com",
            address: "123 Main St",
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            roleId: adminRole.id,
          },
          {
            fullName: "peter parker",
            username: "peterparker@example.com",
            address: "456 Oak Ave",
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            roleId: adminRole.id,
          },
          {
            fullName: "mary jane",
            username: "maryjane@example.com",
            address: "789 Pine Rd",
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            roleId: adminRole.id,
          },
        ],
      });
  }
  if (countRole !== 0 && countUser !== 0) {
    console.log("Database already seeded.");
  }
};

export default initDatabase;
