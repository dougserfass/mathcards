//Handle Login
Template.login.events({
    'click #loginSubmit': function(event, template) {
        event.preventDefault();
        console.log('login');
        var username = template.find('#login-username').value,
            password = template.find('#login-password').value;
        Meteor.loginWithPassword(username, password, function(error) { // Login user in
            console.log(error);
            if (Meteor.user() && !error) {
                Modal.hide('login');
                //location.reload();
                Router.go('/');
            } else {
                sweetAlert(error['reason']); // Error handling
            }

            return;
        });

        return false;
    },
    'click #skipBtn': function(e, t) {
        Router.go('/');
    }
});