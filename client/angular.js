/* 
 ** Angular and meteor client javascript code
 */

angular.module('taskMaster', ['angular-meteor', 'famous.angular'])
    .controller('ModifierCtrl', ['$scope', '$famous', '$timeout',
        function($scope, $famous, $timeout) {

            $scope.defSpacing = 20;

            $scope.checkEnd = false;


            $scope.cards = [];
            /*
             ** Import this famo.us library to transition the card to the center
             */
            var Transitionable = $famous['famous/transitions/Transitionable'],
                EventHandler = $famous['famous/core/EventHandler'],
                ScrollView = $famous['famous/views/Scrollview'];

            $scope.eventHandler = new EventHandler(); // Scrollview event handler

            $scope.dragHandler = new EventHandler(); // Dragging event handler

            $scope.myOptions = {
                xRange: [0, 220],
                yRange: [0, 0]
            };


            $scope.options = { //Scrollview options
                scrollViewTwo: {
                    direction: 1,
                    paginated: false,
                    speedLimit: 20,
                    clipSize: (window.innerHeight - 100)
                }
            };


            $scope.searchWidth = (window.innerWidth - 13);

            /*
             ** Adds padding to card heading box...
             */
            $scope.cardPad = (0.01 * (window.innerHeight - 210)) + 'px';

            /*
            ** Set Card's description box's height...
            */
            $scope.cardDescHeight = (0.45 * (window.innerHeight - 350)) + 'px';

            /*
            **  Set Card's example's box height now...
            */
            var getSetCardContentHeight = function () {    
                var titleBoxHeight = angular.element(document.querySelector('#titleBox')).height()
                if(titleBoxHeight == null) {
                    $timeout( function () {
                        getSetCardContentHeight();
                    }, 10 );
                } else {
                    $scope.cardExaHeight = parseInt((window.innerHeight - 280) - parseInt($scope.cardDescHeight.replace('px','')) - parseInt(titleBoxHeight));
                }
            };

            getSetCardContentHeight();

            /*
             ** Card surfaces properties
             */
            $scope.card = {
                'translate': new Transitionable([20, 40, 0]),
                'size': [window.innerWidth - 40, window.innerHeight - 190]
            };

            $scope.menuSize = [220, (window.innerHeight - 50)]; // Size of menu Famo.us surface...

            $scope.cardSpaceView = [window.innerWidth, 0];

            $scope.menuTranslate2 = [-220, 0, 0]; // Default menu translate options.
            $scope.menuTranslate1 = [0, 20, 0];

            $scope.menuClick = function() { // Opening and closing the menu, on clicking the menu button.
                dtemp.setPosition([0, 0]);
                if ($scope.menuTranslate2[0] > -219) {
                    $scope.menuTranslate2 = [-220, 0, 0];
                    $scope.menuTranslate1 = [0, 20, 0];
                } else {
                    $scope.menuTranslate2 = [0, 0, 0];
                    $scope.menuTranslate1 = [220, 20, 0];
                }
                $timeout(function() {
                    return $scope.$apply();
                }, 0);
            };

            /*
            ** Listening to search box key presses..
            */
          /*
             $('#search-box')['context'].addEventListener('keyup', function () {
                var text = $('input#search-box').val().trim()
                    sortOpt = {};


                     if ($scope.colourPressed) {
                        sortOpt = {
                            color : -1
                        }
                    } else if ($scope.letterPressed) {
                        sortOpt = {
                            title : -1
                        }
                    } else {
                        sortOpt = {};
                    }

               if(text !== undefined) {                
                    PackageSearch.search(text);

                    var t = PackageSearch.getData({
                        transform: function (matchText, regExp) {
                            return matchText;
                        },
                        sort: sortOpt
                    });

                     $scope.cards = t;
                     $timeout(function() { return $scope.$apply(); }, 100);
                }
            
            }, true);
            */
  
            $scope.updateVal = function(pos, vel) { // Execute when the scrolling velocity is updated..

                if (pos == 'update' && (vel < 0)) {
                    $scope.checkEnd = false;
                    if ($scope.defSpacing >= -200) {
                        $scope.defSpacing = $scope.defSpacing - 0.1;
                    }
                } else if (pos == 'end') { //Scrolling is ended: Resume to normal
                    if ($scope.checkEnd) {
                        if ($scope.defSpacing <= 20) {
                            $scope.defSpacing = $scope.defSpacing + 0.1;
                            setTimeout(function() {
                                return $scope.updateVal('end');
                            }, 30);
                        }
                    }
                }

                /*
                * Need to work on increasing and decreasing inter-card distance like real cards
                */

           /*     stemp.setOptions({ // Update spacing between card surfaces
                    'direction': 1,
                    'itemSpacing': $scope.defSpacing 
                });
           */ };


            stemp = 0, dtemp = 0; //Initialising
            $scope.dragInit = 0;

            var addListener = function() {
                var tempScroll = $famous.find('#card-scrollview')[0];

                if (tempScroll == undefined) {
                    $timeout(function() {
                        return addListener();
                    }, 100); // Try again after some time... until the view is rendered
                } else {
                    /*
                     * Listen to Scrollview's events
                     */
                    var ftemp = $famous.find('#card-scrollview')[0].renderNode.sync;
                    ftemp.on('update', function(event) { // During scrolling
                        $scope.updateVal('update', event['velocity']);
                    });


                    ftemp.on('end', function(event) { // Scrolling ended
                        $scope.checkEnd = true;
                        $scope.updateVal('end');
                    });

                    /*
                     * Listening to sequential layout event
                     */
                    stemp = $famous.find('#card-sequentiallayout')[0].renderNode;

                    stemp.setOptions({ //Set default sequential layout options for card surfaces
                        'direction': 1,
                        'itemSpacing': $scope.defSpacing
                    });

                    /*
                     * Listening to Draggable event
                     */
                    /*dtemp = $famous.find('#card-draggable')[0].renderNode._object;

                    dtemp.sync.on('end', function(e) {
                        $scope.dragInit = 0;
                    });*/

                    /*
                     * Dragging menu out on card drag logic....
                     */

                    //dtemp.sync.on('update', function(e) {
                        /*
                         * Restricting accidental pull-out of a menu
                         */
                        /*if ($scope.dragInit < 50) {
                            $scope.dragInit++;
                            if (dtemp.getPosition()[0] < 6)
                                dtemp.setPosition([0, 0]);
                        }
                        if ($scope.menuTranslate1[0] == 0) {
                            $scope.menuTranslate2 = [(-220 + dtemp.getPosition()[0]), 0, 0];
                        } else {
                            $scope.menuTranslate1[0] = 0;
                            dtemp.setPosition([220, 0]);
                        }

                    });*/
                }

            };

            addListener();

            /* 
             **  Edit modal
             */
            $scope.openEditModal = function(index) {
                Session.set('editModal', $scope.cards[index]);
                Session.set('allCards', $scope.cards);
                Session.set('editIndex', index);

                Modal.show('cardEdit');
            };

            //Set default menu activity to null
            var defaultActivity = function() {
                $scope.active1 = '';
                $scope.active2 = '';
                $scope.active3 = '';
                $scope.active4 = '';
                $scope.active5 = '';
                $scope.active6 = '';
                $scope.active7 = '';
            };

            defaultActivity();

            // Setting active menu
            $scope.setActive = function(num) {
                defaultActivity(); // Set all to inactive...

                if (num == 1) {
                    $scope.active1 = 'active1';
                } else if (num == 2) {
                    $scope.active2 = 'active1';
                } else if (num == 3) {
                    $scope.active3 = 'active1';
                } else if (num == 4) {
                    $scope.active4 = 'active1';
                } else if (num == 5) {
                    $scope.active5 = 'active1';
                } else if (num == 6) {
                    $scope.active6 = 'active1';
                } else if (num == 7) {
                    $scope.active7 = 'active1';
                }

            };

            $scope.setActive(1); // Set Home menu as Default
     
            //Defaults menu
            $scope.colourPressed = false;
            $scope.letterPressed = false;
           
            /*
             * Home menu clicked
             */
            $scope.goHome = function() {
                $scope.colourPressed = false;
                $scope.letterPressed = false;
            
                var tempCards = Cards.find().fetch();
                $scope.cards = tempCards;
            };

            /*
             *   Sort by colour menu clicked
             */
            $scope.sortByColour = function() {
                $scope.colourPressed = true;
                $scope.letterPressed = false;
            
                var tempCards = Cards.find({}, {
                    sort: {
                        color: -1
                    }
                }).fetch();
                $scope.cards = tempCards;
            };

            /*
             * Sort by Letter menu clicked
             */
            $scope.sortByLetter = function() {
                $scope.colourPressed = false;
                $scope.letterPressed = true;
            
                var tempCards = Cards.find({}, {
                    sort: {
                        title: -1
                    }
                }).fetch();
                $scope.cards = tempCards;
            };


                        /*
             ** Observing changes to Cards collection
             */
            Cards.find().observe({
                added: function(document) {
                    //console.log('added');
                    $scope.cards.push(document); // Add cards to the scope as they are added to the mongo database
                    $scope.$apply();
                },
                changed: function(document) {
                    console.log('updated');
                    if ($scope.active1) {
                        $scope.cards = Cards.find().fetch(); // Update cards through scope, when the edit changes are made to the Cards collection, in events.js (Through the edit modal)
                        $scope.$apply();
                    } else if ($scope.active2) {
                        $scope.cards = Cards.find({}, {
                            sort: {
                                color: -1
                            }
                        }).fetch(); // Update cards through scope, when the edit changes are made to the Cards collection, in events.js (Through the edit modal)
                        $scope.$apply();
                    } else if ($scope.active3) {
                        $scope.cards = Cards.find({}, {
                            sort: {
                                title: -1
                            }
                        }).fetch(); // Update cards through scope, when the edit changes are made to the Cards collection, in events.js (Through the edit modal)
                        $scope.$apply();
                    } else {
                        $scope.cards = Cards.find().fetch(); // Update cards through scope, when the edit changes are made to the Cards collection, in events.js (Through the edit modal)
                        $scope.$apply();
                    }
                },

                removed: function(document) {
                    console.log('removed');
                }
            });

            $scope.loginBtn = function () {
              //  Modal.show('login');
                Router.go('/login');
            };

            $scope.logoutBtn = function () {
                Meteor.logout();
                Router.go('/login');
            };

        }
    ]) /// End of Modifier Controller

/*
** Autocomplete
*/
    .directive('angucomplete', function ($parse, $http, $sce, $timeout) {
    return {
        restrict: 'EA',
        scope: {
            "id": "@id",
            "placeholder": "@placeholder",
            "selectedObject": "=selectedobject",
            "url": "@url",
            "dataField": "@datafield",
            "titleField": "@titlefield",
            "descriptionField": "@descriptionfield",
            "imageField": "@imagefield",
            "imageUri": "@imageuri",
            "inputClass": "@inputclass",
            "userPause": "@pause",
            "localData": "=localdata",
            "searchFields": "@searchfields",
            "minLengthUser": "@minlength",
            "matchClass": "@matchclass"
        },
        template: '<div class="angucomplete-holder"><input id="{{id}}" ng-model="searchStr" type="text" placeholder="{{placeholder}}" class="{{inputClass}}" onmouseup="this.select();" ng-focus="resetHideResults()" ng-blur="hideResults()" /><div id="{{id}}_dropdown" class="angucomplete-dropdown" ng-if="showDropdown"><div class="angucomplete-searching" ng-show="searching">Searching...</div><div class="angucomplete-searching" ng-show="!searching && (!results || results.length == 0)">No category found</div><div class="angucomplete-row" ng-repeat="result in results" ng-mousedown="selectResult(result)" ng-mouseover="hoverRow()" ng-class="{\'angucomplete-selected-row\': $index == currentIndex}"><div ng-if="imageField" class="angucomplete-image-holder"><img ng-if="result.image && result.image != \'\'" ng-src="{{result.image}}" class="angucomplete-image"/><div ng-if="!result.image && result.image != \'\'" class="angucomplete-image-default"></div></div><div class="angucomplete-title" ng-if="matchClass" ng-bind-html="result.title"></div><div class="angucomplete-title" ng-if="!matchClass">{{ result.title }}</div><div ng-if="result.description && result.description != \'\'" class="angucomplete-description">{{result.description}}</div></div></div></div>',

        link: function($scope, elem, attrs) {
            $scope.lastSearchTerm = null;
            $scope.currentIndex = null;
            $scope.justChanged = false;
            $scope.searchTimer = null;
            $scope.hideTimer = null;
            $scope.searching = false;
            $scope.pause = 500;
            $scope.minLength = 3;
            $scope.searchStr = null;

            if ($scope.minLengthUser && $scope.minLengthUser != "") {
                $scope.minLength = $scope.minLengthUser;
            }

            if ($scope.userPause) {
                $scope.pause = $scope.userPause;
            }

            isNewSearchNeeded = function(newTerm, oldTerm) {
                return newTerm.length >= $scope.minLength && newTerm != oldTerm
            }

            $scope.processResults = function(responseData, str) {
                if (responseData && responseData.length > 0) {
                    $scope.results = [];

                    var titleFields = [];
                    if ($scope.titleField && $scope.titleField != "") {
                        titleFields = $scope.titleField.split(",");
                    }

                    for (var i = 0; i < responseData.length; i++) {
                        // Get title variables
                        var titleCode = [];

                        for (var t = 0; t < titleFields.length; t++) {
                            titleCode.push(responseData[i][titleFields[t]]);
                        }

                        var description = "";
                        if ($scope.descriptionField) {
                            description = responseData[i][$scope.descriptionField];
                        }

                        var imageUri = "";
                        if ($scope.imageUri) {
                            imageUri = $scope.imageUri;
                        }

                        var image = "";
                        if ($scope.imageField) {
                            image = imageUri + responseData[i][$scope.imageField];
                        }

                        var text = titleCode.join(' ');
                        if ($scope.matchClass) {
                            var re = new RegExp(str, 'i');
                            var strPart = text.match(re)[0];
                            text = $sce.trustAsHtml(text.replace(re, '<span class="'+ $scope.matchClass +'">'+ strPart +'</span>'));
                        }

                        var resultRow = {
                            title: text,
                            description: description,
                            image: image,
                            originalObject: responseData[i]
                        }

                        $scope.results[$scope.results.length] = resultRow;
                    }


                } else {
                    $scope.results = [];
                }
            }

            $scope.searchTimerComplete = function(str) {
                // Begin the search

                if (str.length >= $scope.minLength) {
                    if ($scope.localData) {
                        var searchFields = $scope.searchFields.split(",");

                        var matches = [];

                        for (var i = 0; i < $scope.localData.length; i++) {
                            var match = false;

                            for (var s = 0; s < searchFields.length; s++) {
                                match = match || (typeof $scope.localData[i][searchFields[s]] === 'string' && typeof str === 'string' && $scope.localData[i][searchFields[s]].toLowerCase().indexOf(str.toLowerCase()) >= 0);
                            }

                            if (match) {
                                matches[matches.length] = $scope.localData[i];
                            }
                        }

                        $scope.searching = false;
                        $scope.processResults(matches, str);

                    } else {
                        $http.get($scope.url + str, {}).
                            success(function(responseData, status, headers, config) {
                                $scope.searching = false;
                                $scope.processResults((($scope.dataField) ? responseData[$scope.dataField] : responseData ), str);
                            }).
                            error(function(data, status, headers, config) {
                                console.log("error");
                            });
                    }
                }
            }

            $scope.hideResults = function() {
                $scope.hideTimer = $timeout(function() {
                    $scope.showDropdown = false;
                }, $scope.pause);
            };

            $scope.resetHideResults = function() {
                if($scope.hideTimer) {
                    $timeout.cancel($scope.hideTimer);
                };
            };

            $scope.hoverRow = function(index) {
                $scope.currentIndex = index;
            }

            $scope.keyPressed = function(event) {
                if (!(event.which == 38 || event.which == 40 || event.which == 13)) {
                    if (!$scope.searchStr || $scope.searchStr == "") {
                        $scope.showDropdown = false;
                        $scope.lastSearchTerm = null
                    } else if (isNewSearchNeeded($scope.searchStr, $scope.lastSearchTerm)) {
                        $scope.lastSearchTerm = $scope.searchStr
                        $scope.showDropdown = true;
                        $scope.currentIndex = -1;
                        $scope.results = [];

                        if ($scope.searchTimer) {
                            $timeout.cancel($scope.searchTimer);
                        }

                        $scope.searching = true;

                        $scope.searchTimer = $timeout(function() {
                            $scope.searchTimerComplete($scope.searchStr);
                        }, $scope.pause);
                    }
                } else {
                    event.preventDefault();
                }
            }

            $scope.selectResult = function(result) {
                if ($scope.matchClass) {
                    result.title = result.title.toString().replace(/(<([^>]+)>)/ig, '');
                }
                $scope.searchStr = $scope.lastSearchTerm = result.title;
                $scope.selectedObject = result;
                $scope.showDropdown = false;
                $scope.results = [];
                //$scope.$apply();
            }

            var inputField = elem.find('input');

            inputField.on('keyup', $scope.keyPressed);

            elem.on("keyup", function (event) {
                if(event.which === 40) {
                    if ($scope.results && ($scope.currentIndex + 1) < $scope.results.length) {
                        $scope.currentIndex ++;
                        $scope.$apply();
                        event.preventDefault;
                        event.stopPropagation();
                    }

                    $scope.$apply();
                } else if(event.which == 38) {
                    if ($scope.currentIndex >= 1) {
                        $scope.currentIndex --;
                        $scope.$apply();
                        event.preventDefault;
                        event.stopPropagation();
                    }

                } else if (event.which == 13) {
                    if ($scope.results && $scope.currentIndex >= 0 && $scope.currentIndex < $scope.results.length) {
                        $scope.selectResult($scope.results[$scope.currentIndex]);
                        $scope.$apply();
                        event.preventDefault;
                        event.stopPropagation();
                    } else {
                        $scope.results = [];
                        $scope.$apply();
                        event.preventDefault;
                        event.stopPropagation();
                    }

                } else if (event.which == 27) {
                    $scope.results = [];
                    $scope.showDropdown = false;
                    $scope.$apply();
                } else if (event.which == 8) {
                    $scope.selectedObject = null;
                    $scope.$apply();
                }
            });

        }
    };
});