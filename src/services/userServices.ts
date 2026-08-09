import getConnection from "config/database";

const handleCreateUser = async (
  name: string,
  email: string,
  address: string,
) => {
  const connection = await getConnection();
  try {
    const sql = "INSERT INTO `users`(name, email, address) VALUES (?, ?, ?)";
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
    const [results,fields] = await connection.execute("SELECT * FROM users");
    return results;
  } catch (e) {
    console.error("Error fetching users:", e);
    return [];
  } finally {
    await connection.end(); // luôn đóng connection
  }
};

const handleDeleteUser = async (id: string) => {
  const connection = await getConnection();
  try {
    const sql = "DELETE FROM `users` WHERE id = ?";
    const [results,fields] = await connection.execute(sql, [id]);
    return results;
  } catch (e) {
    console.error("Error deleting user:", e);
    throw e; // re-throw để controller biết có lỗi
  } finally {
    await connection.end(); // luôn đóng connection
  }
};
const getUserById = async (id: string) => {
  const connection = await getConnection();
  try {
    const sql = "SELECT * FROM `users` WHERE id = ?";
    const [results,fields] = await connection.execute(sql, [id]);
    return results;
  } catch (e) {
    console.error("Error fetching user:", e);
    throw e;
  } finally {
    await connection.end();
  }
};
const handleUpdateUser = async (id: string, name: string, email: string, address: string) => {
  const connection = await getConnection();
  try {
    const sql = "UPDATE `users` SET name = ?, email = ?, address = ? WHERE id = ?";
    const values = [name, email, address, id];
    await connection.execute(sql, values);
  } catch (e) {
    console.error("Error updating user:", e);
    throw e; // re-throw để controller biết có lỗi
  } finally {
    await connection.end(); // luôn đóng connection
  }
};
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, handleUpdateUser };
