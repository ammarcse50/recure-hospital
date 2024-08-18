const users = require("../models/userModel");

// const createToken = (_id) => {
//   const token = jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "2d",
//   });
// };
exports.getAllUsers = async (req, res) => {
  const  allUsers = await users.find({});
   res.send(allUsers)
};
exports.saveUsers = async (req, res) => {
  const user = req.body;

  const query = { email: user?.email };
  const exist = await users.findOne(query);
  if (exist) {
    throw new Error("already existed");
  }
  const { firstname, lastname, email, phone, role, password } = req.body;

  const newUser = await users.create({
    firstname,
    lastname,
    email,
    phone,
    role,
    password,
  });
};
