const express = require('express');
const router = express.Router();

/**
 * PUT
 * Edit user details.
 */
module.exports = (User) => {
	router.patch(
		'/edit/:id',
		async (req, res, next) => {
			try {
        const userId = req.params.id;
        console.log(userId);
        console.log(req.body);
				const { name, email, password } = req.body;
				const userFind = await User.findById(userId);

				if (!userFind) {
					res.status(400).json({ message: 'User not found' });
					return;
				}

				const user = {
					name,
					email,
					password
				};

        console.log(user);
				await User.findByIdAndUpdate(req.params.id, user);

				res.status(200).json({ User: 'User updated!' });
			} catch {
				next(error);
			}
		}
	);

	return router;
};