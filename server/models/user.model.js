const db = require("../db");
const crypto = require("crypto");

const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    salt VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

db.query(createUserTableQuery)
  .then(() => console.log("Users table created successfully"))
  .catch((error) => console.error("Error creating users table:", error));

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.salt = User.makeSalt();
    this.hashed_password = User.encryptPassword(password, this.salt);
  }

  static async create(name, email, password) {
    const user = new User(name, email, password);
    const query = `
      INSERT INTO users (name, email, hashed_password, salt)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [user.name, user.email, user.hashed_password, user.salt];
    console.log(values);
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  static async findByEmail(email) {
    const query = `
      SELECT * FROM users WHERE email = $1;
    `;
    try {
      const result = await db.query(query, [email]);
      return result.rows[0];
    } catch (error) {
      console.error("Error finding user by email:", error);
      throw error;
    }
  }

  static authenticate(plainText, salt, hashPass) {
    return this.encryptPassword(plainText, salt) === hashPass;
  }
  static encryptPassword(password, salt) {
    if (!password) return "";
    try {
      return crypto.createHmac("sha1", salt).update(password).digest("hex");
    } catch (err) {
      console.log(err);
      return "";
    }
  }

  static makeSalt() {
    return `${Math.round(new Date().valueOf() * Math.random())}`;
  }
  static async updateUserPassword(newPassword,email) {
    const newSalt = User.makeSalt();
    const newHashedPassword = User.encryptPassword(newPassword, newSalt);
    console.log("1111", newSalt)
    console.log("!!!!", newHashedPassword)
    const query = `
      UPDATE users 
      SET hashed_password = $1, salt = $2
      WHERE email = $3;
    `;
    const values = [newHashedPassword, newSalt,email];
    try {
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
}

module.exports = User;
