const express = require("express")
const passport = require("passport")

const router = express.Router()

router.get(
	"/loan",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		res.send()
	}
)

router.post("/loan", async (req, res) => {
	const { email, password } = req.body

	if (!userWithEmail)
		return res
			.status(400)
			.json({ message: "Email or password does not match!" })

	if (userWithEmail.password !== password)
		return res
			.status(400)
			.json({ message: "Email or password does not match!" })

	const jwtToken = jwt.sign(
		{ id: userWithEmail.id, email: userWithEmail.email },
		process.env.JWT_SECRET
	)

	res.json({ message: "Welcome Back!", token: jwtToken })
})

module.exports = router
