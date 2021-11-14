const express = require('express');
const passport = require('passport');

const router = express.Router();

const User = require('../models/user');
const Loan = require('../models/loan');


router.post('/loan', async (req, res) => {
  const { loan_amount, user_id, loan_status } = req.body;

  const newLoan = new Loan({ loan_amount, user_id, loan_status });

  const savedLoan = await newLoan.save().catch((err) => {
    console.log('Error: ', err);
    res.status(500).json({ error: 'Cannot Request Loans at the moment!' });
  });

  if (savedLoan) res.json({ message: 'New Loan Created', savedLoan });
});

module.exports = router;
