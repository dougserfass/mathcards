Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
Houston.add_collection(Cards);

Houston.methods("users", {
  "Encrypt password": function (user) {
    Meteor.users.remove(user._id);
    Accounts.createUser({
      email: user.emails[0].address,
      password: user.services.password.bcrypt,
      profile: { name: user.name }
    });
    return "Password encrypted.";
  }
});

Meteor.methods({
    currentUserIsAdmin: function (result) {
        var admin = Houston._user_is_admin(this.userId);
        if (!admin) {
            return false;
        } else {
            return true;
        }
    }
})