/*Accounts.validateNewUser(function (user) {

	if (user.username.length < 5) {
		throw new Meteor.Error(403, 'Username should be at least 5 characters!');
	}

	var passwordTest = new RegExp("(?=.{6,}).*", "g");
	if (passwordTest.test(user.password) == false) {
		throw new Meteor.Error(403, 'Your passowrd is too weak!');
	}

	return true;
});*/