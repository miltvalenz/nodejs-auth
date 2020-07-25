// models/user/model.js
const mongoose = require('mongoose');
const schema = require('./schema');
const bcrypt = require('bcryptjs');

/**
 * Middleware
 * EncryptPassword fot save on DB.
 */
schema.methods.encryptPassword = async password => {
	const salt = await bcrypt.genSalt(10);
	const hash = bcrypt.hash(password, salt);
	return hash;
};

/**
 * Middleware
 * Validate password on Login.
 */
schema.methods.matchPassword = async function(password) {
	return await bcrypt.compare(password, this.password);
};

/**
 * Export new mongoose model User.
 */
const User = mongoose.model('User', schema);
module.exports = User;