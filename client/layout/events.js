/*
 ** Edit card form handling
 */

Template.cardEdit.events({
    'click #save-edit': function(event, template) {
        var title = template.find('#edit-title').value,
            description = template.find('#edit-description').value,
            category = template.find('#edit-category').value,
            tex = template.find('#edit-tex').value,
            color = template.find('#edit-color').value,
            tempNewExamples = [],
            cardVals = Session.get('allCards'),
            cardIndex = Session.get('editIndex'),
            chosenCard = Session.get('editModal');

        cardIndex = parseInt(cardIndex);

        chosenCard['title'] = title;
        chosenCard['description'] = description;
        chosenCard['category'] = category;
        chosenCard['tex'] = tex;
        chosenCard['color'] = color;

        for (var i = 0; i < 1000; i++) {
            if ((template.find('#edit-example-' + i) == undefined) || (template.find('#edit-example-' + i) == null)) {
                break;
            }
            var tempExample = template.find('#edit-example-' + i).value;

            if (' '.localeCompare(tempExample) != 0) { // Remove empty examples
                tempNewExamples.push(tempExample);
            }
        }

        /*
         * Update Colllection
         */
        Cards.update(chosenCard['_id'], {
            $set: {
                'title': title,
                'description': description,
                'category': category,
                'tex': tex,
                'examples': tempNewExamples,
                'color': color
            }
        });

        cardVals[cardIndex] = chosenCard;

        Session.set('editModal', chosenCard);
        Session.set('allCards', cardVals);

        Modal.hide('cardEdit');
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    },
    'click #cancel-edit': function() {
        Modal.hide('cardEdit');
    },
    'click #add-more': function(event, template) {
        var modalData = Session.get('editModal'),
            cardEdit = modalData['examples'];

        cardEdit.push(' '); //Add one more input

        modalData['examples'] = cardEdit

        Session.set('editModal', modalData);
    },
    'click': function(event, template) {
        if (event.currentTarget.attributes[1] != undefined) {
            var tempAttr = event.currentTarget.attributes[1]['value'],
                patt = new RegExp("examp-addon-"),
                res = patt.test(tempAttr);

            if (res) {
                tempAttr = parseInt(tempAttr.replace("examp-addon-", ''));

                var modalData = Session.get('editModal'),
                    cardEdit = modalData['examples'];

                cardEdit.splice(tempAttr, 1); // Remove example

                modalData['examples'] = cardEdit

                Session.set('editModal', modalData);
            }
        }
    }
});

