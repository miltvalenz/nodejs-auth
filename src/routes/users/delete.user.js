const express = require('express');
const router = express.Router();

/* Delete user. */
module.exports = ( User ) => {
	router.delete('/delete/:id', async (req, res, next) => {
		try {
			await User.findByIdAndDelete(req.params.id);
			res.status(200).json({ success: 'User Deleled Successfully!' });
		} catch {
			next(error);
		}
	});

	return router;
};