Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});
Router.map(function() {
    this.route('famousView', {path: '/'});
    this.route('login', {path: '/login'});
    this.route('searchResult', {path: '/search'});
    this.route('defaultSignout');
});
/*
Router.route('/', function () {
    this.render('famousView')
});
Router.route('/login', function () {
    this.render('login');
});
Router.route('/search', function () {
    this.render('searchResult');
});
*/
var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate);
        else {
          this.render('famousView');
        }
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    } else {
        //console.log("hello");
        this.next();
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
}
Router.onBeforeAction('loading');
//Router.onBeforeAction(requireLogin, {except: ['admin']});
Router.onBeforeAction(requireLogin);