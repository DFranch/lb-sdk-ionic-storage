module.exports = function(app) {

	var User = app.models.user;
	var Role = app.models.Role;
	var RoleMapping = app.models.RoleMapping;
	var Team = app.models.Team;

	User.create([
		{username: 'admin', email: 'john@doe.com', password: 'admin'},
		{username: 'Jane', email: 'jane@doe.com', password: 'opensesame'},
		{username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
	], function (err, users) {
		if (err) return console.log(err);

	});

};