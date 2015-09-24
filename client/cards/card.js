//Template.famousView.created = function(){
  //if (!this.rendered){
    //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    //this.rendered = true;
  //}
//};

Meteor.startup(function () {
  //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
});

Template.famousView.onRendered = function(){
  //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
};

//Template.famousView.helpers({
  //invokeAfterLoad: function () {
    //MathJax.Hub.Typeset();
  //}
//});

Template.famousView.helpers({
  currentUserIsAdmin: function () {
    Meteor.call('currentUserIsAdmin', function(error, result) {
      Session.set('currentUserIsAdminResult', result);
    });
    return Session.get('currentUserIsAdminResult');
  }
})