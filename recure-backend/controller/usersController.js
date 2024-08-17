exports.saveUser = async (req, res) => {
  const user = req.body;

  const query = { email: user?.email };
  const exist = await userCollection.findOne(query);
  if (exist) {
    res.send({ message: "user existed", insertedId: null });
  }

  const result = await userCollection.insertOne(user);
  res.send(result);
};
app.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "2h",
  });

  res.send({ token });
});