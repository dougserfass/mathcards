Meteor.startup(function () {
  //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
});

Template.defaultHeader.helpers({
    currentUserIsAdmin: function () {
        Meteor.call('currentUserIsAdmin', function(error, result) {
            Session.set('currentUserIsAdminResult', result);
        });
        return Session.get('currentUserIsAdminResult');
    }
})

/*Tracker.autorun(function(){
  if(!Meteor.user()){
    Router.go('defaultSignout');
  }
});*/