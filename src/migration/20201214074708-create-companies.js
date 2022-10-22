module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('companies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT
    },
    user_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    name: {
      type: Sequelize.STRING(50)
    },
    industry_type: {
      type: Sequelize.STRING(50)
    },
    address: {
      type: Sequelize.TEXT
    },
    pincode: {
      type: Sequelize.STRING(6)
    },
    gst_no: {
      type: Sequelize.STRING(15),
      unique: true
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('companies')
};
