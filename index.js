const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4000;

app.get("/users", async (request, response) => {
  const users = await User.findAll();
  response.send(users);
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
