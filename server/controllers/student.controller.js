import Students from '../models/student.model.js';
import Users from '../models/user.model.js';
import bcrypt from "bcrypt";

export const Register = async (req, res) => {
  const { stdid, firstname, lastname, email, password, confPassword } = req.body;

  // Check if password is missing or undefined
  if (!password) {
    return res.status(400).json({ msg: "Password is required", requestBody: req.body });
  }

  // Check if password and confirm password match
  if (password !== confPassword) {
    return res.status(400).json({ msg: "Password and Confirm Password do not match" });
  }

  const saltRounds = 10;

  try {
    // Check if a user with the same email already exists
    const existingUser = await Users.findOne({ where: { email: email } });

    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await Users.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashPassword,
      roleId: "1"
    });

    await Students.create({
      stdid: stdid,
      userId: newUser.userid,
    });


    return res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return res.status(500).json({ msg: "Registration Error" });
  }
};