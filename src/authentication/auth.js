import jwt from "jsonwebtoken";

const user = { id: 1, name: "Night" };
const secret = "mySuperSecretKey";

const token = jwt.sign(user, secret, { expiresIn: "1h" });

console.log(token); // → header.payload.signature
