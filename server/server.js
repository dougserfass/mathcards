	//Cards = new Mongo.Collection('cards');

	/*
	 * Empty previous stored cards
	 */
	 //Cards.remove({});

	/*
	 * Allow(Permit using ongoworks:security package) users to make updates
	 */
	Cards.permit('update').ifLoggedIn().apply();

	/*
	 * Enter dummy data
	 */
	if ((Cards.find().fetch()).length == 0) {
	    Cards.insert({
	        'title': 'Card 1',
	        'description': 'Description1',
	        'category': 'category1',
	        'examples': ['ex1', 'ex2'],
	        'color': '#3498db',
          'tex': '\\sqrt{x + 1}'
	    });
	    Cards.insert({
	        'title': 'Card 2',
	        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna tortor, volutpat sed orci in, pretium scelerisque dui. Vivamus suscipit libero felis, a elementum ex tincidunt vel. Ut mattis pharetra pretium. Proin nec mollis nisi. Duis a fermentum mi, non tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam congue facilisis dapibus. Praesent at massa eu nulla vehicula dapibus. Mauris diam felis, rutrum elementum interdum sit amet, euismod quis tellus. Aliquam euismod diam lacus. Ut pharetra metus sed aliquam facilisis. In hac habitasse platea dictumst. Curabitur ut odio vitae ipsum consectetur varius sit amet eget neque. Nunc viverra diam eget diam ultrices, a accumsan justo placerat. Sed sapien lacus, euismod vitae vulputate et, porttitor sit amet neque. Sed viverra ligula ac nunc maximus iaculis.',
	        'category': 'category2',
	        'examples': ['ex1', 'ex2', 'ex3'],
	        'color': '#9b59b6',
          'tex': '\\sqrt{x + 2}'
	    });
	    Cards.insert({
	        'title': 'Card 3',
	        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna tortor, volutpat sed orci in, pretium scelerisque dui. Vivamus suscipit libero felis, a elementum ex tincidunt vel. Ut mattis pharetra pretium. Proin nec mollis nisi. Duis a fermentum mi, non tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam congue facilisis dapibus. Praesent at massa eu nulla vehicula dapibus. Mauris diam felis, rutrum elementum interdum sit amet, euismod quis tellus. Aliquam euismod diam lacus. Ut pharetra metus sed aliquam facilisis. In hac habitasse platea dictumst. Curabitur ut odio vitae ipsum consectetur varius sit amet eget neque. Nunc viverra diam eget diam ultrices, a accumsan justo placerat. Sed sapien lacus, euismod vitae vulputate et, porttitor sit amet neque. Sed viverra ligula ac nunc maximus iaculis.',
	        'category': 'category3',
	        'examples': ['ex1', 'ex2', 'ex3'],
	        'color': '#f39c12',
          'tex': '\\sqrt{x + 3}'
	    });
	    Cards.insert({
	        'title': 'Card 4',
	        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna tortor, volutpat sed orci in, pretium scelerisque dui. Vivamus suscipit libero felis, a elementum ex tincidunt vel. Ut mattis pharetra pretium. Proin nec mollis nisi. Duis a fermentum mi, non tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam congue facilisis dapibus. Praesent at massa eu nulla vehicula dapibus. Mauris diam felis, rutrum elementum interdum sit amet, euismod quis tellus. Aliquam euismod diam lacus. Ut pharetra metus sed aliquam facilisis. In hac habitasse platea dictumst. Curabitur ut odio vitae ipsum consectetur varius sit amet eget neque. Nunc viverra diam eget diam ultrices, a accumsan justo placerat. Sed sapien lacus, euismod vitae vulputate et, porttitor sit amet neque. Sed viverra ligula ac nunc maximus iaculis.',
	        'category': 'category4',
	        'examples': ['ex1', 'ex2', 'ex3'],
	        'color': '#95a5a6',
          'tex': '\\sqrt{x + 4}'
	    });
	    Cards.insert({
	        'title': 'Card 5',
	        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna tortor, volutpat sed orci in, pretium scelerisque dui. Vivamus suscipit libero felis, a elementum ex tincidunt vel. Ut mattis pharetra pretium. Proin nec mollis nisi. Duis a fermentum mi, non tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam congue facilisis dapibus. Praesent at massa eu nulla vehicula dapibus. Mauris diam felis, rutrum elementum interdum sit amet, euismod quis tellus. Aliquam euismod diam lacus. Ut pharetra metus sed aliquam facilisis. In hac habitasse platea dictumst. Curabitur ut odio vitae ipsum consectetur varius sit amet eget neque. Nunc viverra diam eget diam ultrices, a accumsan justo placerat. Sed sapien lacus, euismod vitae vulputate et, porttitor sit amet neque. Sed viverra ligula ac nunc maximus iaculis.',
	        'category': 'category5',
	        'examples': ['ex1', 'ex2', 'ex3'],
	        'color': '#1abc9c',
          'tex': '\\sqrt{x + 5}'
	    });
	    Cards.insert({
	        'title': 'Card 6',
	        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna tortor, volutpat sed orci in, pretium scelerisque dui. Vivamus suscipit libero felis, a elementum ex tincidunt vel. Ut mattis pharetra pretium. Proin nec mollis nisi. Duis a fermentum mi, non tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam congue facilisis dapibus. Praesent at massa eu nulla vehicula dapibus. Mauris diam felis, rutrum elementum interdum sit amet, euismod quis tellus. Aliquam euismod diam lacus. Ut pharetra metus sed aliquam facilisis. In hac habitasse platea dictumst. Curabitur ut odio vitae ipsum consectetur varius sit amet eget neque. Nunc viverra diam eget diam ultrices, a accumsan justo placerat. Sed sapien lacus, euismod vitae vulputate et, porttitor sit amet neque. Sed viverra ligula ac nunc maximus iaculis.',
	        'category': 'category6',
	        'examples': ['ex1', 'ex2', 'ex3'],
	        'color': '#f1c40f',
          'tex': '\\sqrt{x + 6}'
	    });
	    Cards.insert({
	        'title': 'Card 7',
	        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna tortor, volutpat sed orci in, pretium scelerisque dui. Vivamus suscipit libero felis, a elementum ex tincidunt vel. Ut mattis pharetra pretium. Proin nec mollis nisi. Duis a fermentum mi, non tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam congue facilisis dapibus. Praesent at massa eu nulla vehicula dapibus. Mauris diam felis, rutrum elementum interdum sit amet, euismod quis tellus. Aliquam euismod diam lacus. Ut pharetra metus sed aliquam facilisis. In hac habitasse platea dictumst. Curabitur ut odio vitae ipsum consectetur varius sit amet eget neque. Nunc viverra diam eget diam ultrices, a accumsan justo placerat. Sed sapien lacus, euismod vitae vulputate et, porttitor sit amet neque. Sed viverra ligula ac nunc maximus iaculis.',
	        'category': 'category7',
	        'examples': ['ex1', 'ex2', 'ex3'],
	        'color': '#1abc9c',
          'tex': '\\sqrt{x + 7}'
	    });
	    Cards.insert({
	        'title': 'Card 8',
	        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna tortor, volutpat sed orci in, pretium scelerisque dui. Vivamus suscipit libero felis, a elementum ex tincidunt vel. Ut mattis pharetra pretium. Proin nec mollis nisi. Duis a fermentum mi, non tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam congue facilisis dapibus. Praesent at massa eu nulla vehicula dapibus. Mauris diam felis, rutrum elementum interdum sit amet, euismod quis tellus. Aliquam euismod diam lacus. Ut pharetra metus sed aliquam facilisis. In hac habitasse platea dictumst. Curabitur ut odio vitae ipsum consectetur varius sit amet eget neque. Nunc viverra diam eget diam ultrices, a accumsan justo placerat. Sed sapien lacus, euismod vitae vulputate et, porttitor sit amet neque. Sed viverra ligula ac nunc maximus iaculis.',
	        'category': 'category8',
	        'examples': ['ex1', 'ex2', 'ex3'],
	        'color': '#3498db',
          'tex': '\\sqrt{x + 8}'
	    });
	    Cards.insert({
	        'title': 'Card 9',
	        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna tortor, volutpat sed orci in, pretium scelerisque dui. Vivamus suscipit libero felis, a elementum ex tincidunt vel. Ut mattis pharetra pretium. Proin nec mollis nisi. Duis a fermentum mi, non tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam congue facilisis dapibus. Praesent at massa eu nulla vehicula dapibus. Mauris diam felis, rutrum elementum interdum sit amet, euismod quis tellus. Aliquam euismod diam lacus. Ut pharetra metus sed aliquam facilisis. In hac habitasse platea dictumst. Curabitur ut odio vitae ipsum consectetur varius sit amet eget neque. Nunc viverra diam eget diam ultrices, a accumsan justo placerat. Sed sapien lacus, euismod vitae vulputate et, porttitor sit amet neque. Sed viverra ligula ac nunc maximus iaculis.',
	        'category': 'category9',
	        'examples': ['ex1', 'ex2', 'ex3'],
	        'color': '#f39c12',
          'tex': '\\sqrt{x + 9}'
	    });
	    Cards.insert({
	        'title': 'Card 10',
	        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna tortor, volutpat sed orci in, pretium scelerisque dui. Vivamus suscipit libero felis, a elementum ex tincidunt vel. Ut mattis pharetra pretium. Proin nec mollis nisi. Duis a fermentum mi, non tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam congue facilisis dapibus. Praesent at massa eu nulla vehicula dapibus. Mauris diam felis, rutrum elementum interdum sit amet, euismod quis tellus. Aliquam euismod diam lacus. Ut pharetra metus sed aliquam facilisis. In hac habitasse platea dictumst. Curabitur ut odio vitae ipsum consectetur varius sit amet eget neque. Nunc viverra diam eget diam ultrices, a accumsan justo placerat. Sed sapien lacus, euismod vitae vulputate et, porttitor sit amet neque. Sed viverra ligula ac nunc maximus iaculis.',
	        'category': 'category10',
	        'examples': ['ex1', 'ex2', 'ex3'],
	        'color': '#34495e',
          'tex': '\\sqrt{x + 10}'
	    });
	    Cards.insert({
	        'title': 'Card 11',
	        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna tortor, volutpat sed orci in, pretium scelerisque dui. Vivamus suscipit libero felis, a elementum ex tincidunt vel. Ut mattis pharetra pretium. Proin nec mollis nisi. Duis a fermentum mi, non tincidunt lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam congue facilisis dapibus. Praesent at massa eu nulla vehicula dapibus. Mauris diam felis, rutrum elementum interdum sit amet, euismod quis tellus. Aliquam euismod diam lacus. Ut pharetra metus sed aliquam facilisis. In hac habitasse platea dictumst. Curabitur ut odio vitae ipsum consectetur varius sit amet eget neque. Nunc viverra diam eget diam ultrices, a accumsan justo placerat. Sed sapien lacus, euismod vitae vulputate et, porttitor sit amet neque. Sed viverra ligula ac nunc maximus iaculis.',
	        'category': 'category11',
	        'examples': ['ex1', 'ex2', 'ex3'],
	        'color': '#95a5a6',
          'tex': '\\sqrt{x + 11}'
	    });
	    /*Cards.insert({'title': 'Card 12', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#8e44ad'});
Cards.insert({'title': 'Card 13', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#16a085'});
Cards.insert({'title': 'Card 14', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#3498db'});
Cards.insert({'title': 'Card 15', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#9b59b6'});
Cards.insert({'title': 'Card 16', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#27ae60'});
Cards.insert({'title': 'Card 17', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#95a5a6'});
Cards.insert({'title': 'Card 18', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#e67e22'});
Cards.insert({'title': 'Card 19', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#f1c40f'});
Cards.insert({'title': 'Card 20', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'], 'color': '#1abc9c'});
Cards.insert({'title': 'Card 21', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#f39c12'});
Cards.insert({'title': 'Card 22', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#34495e'});
Cards.insert({'title': 'Card 23', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'], 'color': '#2ecc71'});
Cards.insert({'title': 'Card 24', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#8e44ad'});
Cards.insert({'title': 'Card 25', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#16a085'});
Cards.insert({'title': 'Card 26', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#3498db'});
Cards.insert({'title': 'Card 27', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'], 'color': '#f1c40f'});
Cards.insert({'title': 'Card 28', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#1abc9c'});
Cards.insert({'title': 'Card 29', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#e74c3c'});
Cards.insert({'title': 'Card 30', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#f39c12'});
Cards.insert({'title': 'Card 31', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#34495e'});
Cards.insert({'title': 'Card 32', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'], 'color': '#2ecc71'});
Cards.insert({'title': 'Card 33', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#8e44ad'});
Cards.insert({'title': 'Card 34', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#16a085'});
Cards.insert({'title': 'Card 35', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#3498db'});
Cards.insert({'title': 'card 36', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#9b59b6'});
Cards.insert({'title': 'card 37', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'], 'color': '#f1c40f'});
Cards.insert({'title': 'card 38', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#1abc9c'});
Cards.insert({'title': 'card 39', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#e74c3c'});
Cards.insert({'title': 'card 40', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#f39c12'});
Cards.insert({'title': 'card 41', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#34495e'});
Cards.insert({'title': 'card 42', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'], 'color': '#2ecc71'});
Cards.insert({'title': 'card 43', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#8e44ad'});
Cards.insert({'title': 'card 44', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#16a085'});
Cards.insert({'title': 'card 45', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#3498db'});
Cards.insert({'title': 'card 46', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#9b59b6'});
Cards.insert({'title': 'card 47', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#27ae60'});
Cards.insert({'title': 'card 48', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#8e44ad'});
Cards.insert({'title': 'card 49', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#16a085'});
Cards.insert({'title': 'card 50', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#3498db'});
Cards.insert({'title': 'card 51', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#9b59b6'});
Cards.insert({'title': 'card 52', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#27ae60'});
Cards.insert({'title': 'card 53', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#95a5a6'});
Cards.insert({'title': 'card 54', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#e67e22'});
Cards.insert({'title': 'card 55', 'description': 'Some Random description', 'category': 'category1', 'examples': ['ex1', 'ex2', 'ex3'],  'color': '#f1c40f'});
*/

	}

	/*
	 ** Publish data to client
	 */

	Meteor.publish('theCards', function() {
	    return Cards.find();
	});

	/*
	 * Create dummy users
	 */
/*
	if (Meteor.users.find({
	    username: 'admin_user'
	}).count() === 0) {
	    Accounts.createUser({
	        username: 'admin_user',
	        email: 'admin_user@email.com',
	        password: 'qwerty'
	    });
	}

	if (Meteor.users.find({
	    username: 'dummy_user'
	}).count() === 0) {
	    Accounts.createUser({
	        username: 'dummy_user',
	        email: 'dummy_user@email.com',
	        password: 'qwerty'
	    });
	}
*/
	/*
	 ** Return search results
	 */
	SearchSource.defineSource('packages', function(searchText, options) {

	    /*
	     ** Search Logic...
	     */

	    if (searchText) {
	        var split = searchText.split(' '),

	            regExp = buildRegExp(split[0]);

	        /*
	         ** Setting priority for individual selectors... --> Title > Category > Description
	         */

	        if (Cards.find({
	            title: regExp
	        }).fetch().length !== 0) {
	            var tempRes = Cards.find({
	                title: regExp
	            }).fetch();
	        } else if (Cards.find({
	            category: regExp
	        }).fetch().length !== 0) {
	            var tempRes = Cards.find({
	                category: regExp
	            }).fetch();
	        } else if (Cards.find({
	            description: regExp
	        }).fetch().length !== 0) {
	            var tempRes = Cards.find({
	                description: regExp
	            }).fetch();
	        } else {
	            var tempArr = [];
	            return tempArr;
	        }

	        var insearch = function(t, s) {
	            var tempArr1 = [],
	                tempReg = new RegExp(s, 'gi');

	            for (var j = 0; j < t.length; j++) {

	                if (tempReg.test(t[j].title)) {
	                    tempArr1.push(t[j]);
	                } else if (tempReg.test(t[j].category)) {
	                    tempArr1.push(t[j]);
	                } else if (tempReg.test(t[j].description)) {
	                    tempArr1.push(t[j]);
	                }
	            }

	            return tempArr1;
	        };

	        if (split.length > 1) {
	            for (var i = 1; i < split.length; i++) {
	                if ((i + 1) == split.length) { //End on last word in the search
	                    return insearch(tempRes, split[i]);
	                } else {
	                    tempRes = insearch(tempRes, split[i]);
	                }
	            }
	        } else {
	            return tempRes;
	        }

	    } else {
	        return Cards.find({}).fetch();
	    }

	});

	var buildRegExp = function(searchText) {
	    var parts = searchText.trim().split(/[ \-\:]+/);
	    return new RegExp("(" + parts.join('|') + ")", "ig");
	};
	