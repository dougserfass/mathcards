
//Create Cards collections
//if (Mongo.Collection.get('cards') == undefined) {
//Cards = new Mongo.Collection('cards');
//}


//Subscribe to Collection cards, published by server
Meteor.subscribe('theCards');


Meteor.startup(function () {
  //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  angular.bootstrap(document, ['taskMaster']);
  Meteor.subscribe('theCards');
  //Meteor.subscribe('user');

  var options = {
      keepHistory: 1000 * 60 * 5,
      localSearch: true
    },
    fields = ['title', 'category', 'description'];

  PackageSearch = new SearchSource('packages', fields, options);
  PackageSearch.search('');
  //Router.go('defaultSignout');
});

Accounts.onLogout(function(){
  //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
})
