module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT
    },
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    },
    role: {
      type: Sequelize.STRING(15),
      allowNull: false
    },
    primary_email_id: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    },
    alternate_email_id: {
      type: Sequelize.STRING(100)
    },
    primary_mobile_no: {
      type: Sequelize.STRING(15),
      allowNull: false,
      unique: true
    },
    alternate_mobile_no: {
      type: Sequelize.STRING(15)
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    access_token: {
      type: Sequelize.TEXT
    },
    otp: {
      type: Sequelize.STRING(4)
    },
    otp_secret_key: {
      type: Sequelize.STRING(32)
    },
    is_otp_verified: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    is_prompted_to_get_otp: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    resend_otp_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    sign_in_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    current_sign_in_at: {
      type: Sequelize.DATE
    },
    last_sign_in_at: {
      type: Sequelize.DATE
    },
    current_sign_in_ip: {
      type: Sequelize.STRING(30)
    },
    last_sign_in_ip: {
      type: Sequelize.STRING(30)
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users')
};
