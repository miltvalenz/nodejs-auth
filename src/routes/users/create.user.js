const express = require('express');
const router = express.Router();

/**
 * POST
 * New User register.
 */
module.exports = (User) => {
	router.post(
		'/register',
		async (req, res, next) => {
			try {

				const {
					name,
					email,
					password,
					passwordConfirmation
				} = req.body;

				const newUser = new User({
					name,
					email,
					password
				});

				newUser.password = await newUser.encryptPassword(password);

				console.log(newUser);
				await newUser.save();

				res.status(200).json({ User: newUser });
			} catch {
				res.status(400).send({
					error:
						'req body should take the form { username, password }'
				});
			}
		}
	);

	return router;
};