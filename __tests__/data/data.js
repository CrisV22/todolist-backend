const { faker } = require('@faker-js/faker');

function todoData() {
  return {
    title: faker.lorem.words()
  };
}

module.exports = {
  todoData,
};
