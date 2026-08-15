import { prisma } from "./client";
const initDatabase = async () => {
  const countUser = await prisma.user.count();
  const countRole = await prisma.role.count();
  if (countUser === 0) {
    await prisma.user.createMany({
      data: [
        {
          fullName: "John Doe",
          username: "johndoe@example.com",
          address: "123 Main St",
          password: "123456",
          accountType: "Standard",
        },
        {
          fullName: "peter parker",
          username: "peterparker@example.com",
          address: "456 Oak Ave",
          password: "9876",
          accountType: "premium",
        },
        {
          fullName: "mary jane",
          username: "maryjane@example.com",
          address: "789 Pine Rd",
          password: "abcdef",
          accountType: "ambassador",
        },
      ],
    });
  } else if (countRole === 0) {
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
  } else {
    console.log("Database already seeded.");
  }
};

export default initDatabase;
