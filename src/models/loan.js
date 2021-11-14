/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Loan = sequelize.define('Loan', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    autoIncrement: true
  },
  loan_amount: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['Approved', 'Rejected', 'First Stage', 'Pending'],
  }
});

module.exports = Loan;
