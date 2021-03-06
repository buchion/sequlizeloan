/* eslint-disable no-console */
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

sequelize.sync();
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Relations

// sequelize.loan.belongsTo(sequelize.users)
// sequelize.users.hasMany(sequelize.loan)

module.exports = sequelize;
