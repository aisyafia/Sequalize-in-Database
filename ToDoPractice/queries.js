const { sequelize } = require("./models");
const { Op } = require("sequelize");

const User = require("./models").user;
const ToDoList = require("./models").todolist;
const ToDoItem = require("./models").toDoItem;

const getUsers = async () => {
  const users = await User.findAll({ raw: true });
  console.log(users);
};

// getUsers();

const getUserById = async (id) => {
  const user = await User.findByPk(id, { raw: true });
  console.log(user);
  sequelize.close();
};

// getUserById(3);

const getUserByName = async (name) => {
  const user = await User.findOne({ where: { name: name } });
  console.log(user.toJSON());
  sequelize.close();
};

// getUserByName("Karla");

const createOneUser = async () => {
  const newUser = await User.create({
    name: "Lutfia",
    email: "fia@aisya.com",
    phone: 987654,
    password: "try",
  });

  const newUsersList = await ToDoList.create({
    name: `${newUser.name}'s List`,
  });

  console.log(newUser.toJSON(), newUsersList.toJSON());
  sequelize.close();
};

// createOneUser();

const createNewToDoItems = async () => {
  const newItems = await ToDoItem.create({
    task: "Clean bedroom",
    deadline: "Every morning",
    important: false,
  });

  const newItem2 = await ToDoItem.create({
    task: "Learn to code",
    deadline: "Everyday",
    important: true,
  });

  const newItem3 = await ToDoItem.create({
    task: "Bake pumpkin cake",
    deadline: "Sunday",
    important: false,
  });

  console.log(newItems.toJSON(), newItem2.toJSON(), newItem3.toJSON());
  sequelize.close();
};

// createNewToDoItems();

const importantTasks = async () => {
  const tasks = await ToDoItem.findAndCountAll({
    where: {
      important: true,
    },
    raw: true,
  });
  console.log(tasks);
  sequelize.close();
};

importantTasks();
