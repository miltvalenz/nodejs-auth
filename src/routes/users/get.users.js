const express = require('express');
const router = express.Router();

/* GET users listing. */
module.exports = (User) => {
	router.get(
		'/',
		async (req, res, next) => {
			try {
        const users = await User.find({});
				res.status(200).json({ Users: users });
			} catch {
				next(error);
			}
		}
	);

	return router;
};