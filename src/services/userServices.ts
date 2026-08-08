import getConnection from "../config/database";

const handleCreateUser = async (
  name: string,
  email: string,
  address: string,
) => {
  const connection = await getConnection();
  try {
    const sql = "INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)";
    const values = [name, email, address];
    await connection.execute(sql, values);
  } catch (e) {
    console.error("Error creating user:", e);
    throw e; // re-throw để controller biết có lỗi
  } finally {
    await connection.end(); // luôn đóng connection
  }
};

const getAllUsers = async () => {
  const connection = await getConnection();
  try {
    const [results] = await connection.execute("SELECT * FROM users");
    return results;
  } catch (e) {
    console.error("Error fetching users:", e);
    return [];
  } finally {
    await connection.end(); // luôn đóng connection
  }
};

export { handleCreateUser, getAllUsers };
