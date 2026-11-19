'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const names = [
      'Introduction to Ashtanga',
      'Morning vinyasa flow routine',
      'Secrets of a yoga teacher'
    ];

    await queryInterface.bulkDelete('Authors', {
      name: {
        [Sequelize.Op.in]: names
      }
    }, {});

    await queryInterface.bulkInsert('Authors', names.map(name => ({
      name,
      createdAt: new Date(),
      updatedAt: new Date()
    })));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', {
      name: {
        [Sequelize.Op.in]: [
          'Introduction to Ashtanga',
          'Morning vinyasa flow routine',
          'Secrets of a yoga teacher'
        ]
      }
    }, {});
  }
};