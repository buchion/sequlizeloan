const express = require("express")
const registerApi = require("./register")
const loginApi = require("./login")
const loanApi = require("./loan")

const router = express.Router()

router.use(registerApi)
router.use(loginApi)
router.use(loanApi)

module.exports = router
