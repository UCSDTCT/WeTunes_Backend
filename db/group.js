'use strict';

var Mongoose 	= require('mongoose');
// var bcrypt      = require('bcrypt-nodejs');

/**
 * SCHEMAS
 */
var Group = new Mongoose.Schema({
    members: [User],
    player: User,
    admin: User,
    id: String,
    name: String
});

var User = new Mongoose.Schema({
    username: String,
    groups: [Groups]
});

// Create a user model
var userModel = Mongoose.model('user', User);
// Create a group model
var groupModel = Mongoose.model('group', Group);

module.exports = userModel;
module.exports = groupModel;