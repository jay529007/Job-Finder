import bcrypt from "bcryptjs";

const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:5000/users");
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const HashPasswords = async () => {
  const users = await getUsers();
  if (!users.length) return;

  for (const user of users) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);
    await fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PUT", // or "PATCH" depending on your API
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user,
        password: hashedPassword,
      }),
    });

    console.log(`✅ Updated password for user: ${user.id}`);
  }
};

 HashPasswords();
