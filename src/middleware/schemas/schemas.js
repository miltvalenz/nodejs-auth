const Joi = require('joi');

/**
 * Data Validation.
 * User schema.
 * Login schema.
 */
const schemas = {
	user: Joi.object().keys({
		name: Joi.string()
			.min(3)
			.max(30)
			.required(),
		email: Joi.string().required(),
		password: Joi.string()
			.min(8)
			.required(),
		passwordConfirmation: Joi.string()
			.min(8)
			.required()
	}),
	login: Joi.object().keys({
		email: Joi.string().required(),
		password: Joi.string()
			.min(8)
			.required(),
	})
};
module.exports = schemas;