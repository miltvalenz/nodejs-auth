const Joi = require('joi');

/**
 * Data Validation function.
 *
 * @param {object} schema: At this case only User and Login schemas.
 * @param {object} property: At this case only 'body' but can be 'body' || 'params' || 'query'.
 */
const validation = (schema, property) => {
	return (req, res, next) => {
		const { error } = Joi.validate(req[property], schema);
		const valid = error == null;

		if (valid) {
			next();
		} else {
			const { details } = error;
			const message = details.map(i => i.message).join(',');

			console.log('error', message);
			res.status(422).json({ error: message });
		}
	};
};
module.exports = validation;