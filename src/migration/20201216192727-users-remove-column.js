module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.removeColumn('users', 'is_prompted_to_get_otp'),

  down: (queryInterface, Sequelize) => queryInterface.addColumn('users', 'is_prompted_to_get_otp', {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  })
};
