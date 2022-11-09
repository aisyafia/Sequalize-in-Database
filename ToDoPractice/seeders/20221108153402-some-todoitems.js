"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "toDoItems",
      [
        {
          task: "Feed the bunnies",
          deadline: "today",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Water the plants",
          deadline: "today",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Make tiramisu",
          deadline: "weekend",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Buy Christmas gifts",
          deadline: "december",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Spread the SVG gospel",
          deadline: "everyday",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Buy boots",
          deadline: "weekend",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("toDoItems", null, {});
  },
};
