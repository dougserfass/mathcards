Template.cardEdit.rendered = function () { //Edit modal's data filling, into inputs
	var cardEdit = Session.get('editModal'); 
	$('#edit-title').val(cardEdit['title']);	
	$('#edit-description').val(cardEdit['description']);
	$('#edit-category').val(cardEdit['category']);
	$('#edit-tex').val(cardEdit['tex']);
	$('#edit-color').val(cardEdit['color']);
};
 
Template.cardEdit.helpers({ // Set example's blaze variable in Edit modal
	examples: function () {
        var cardEdit = Session.get('editModal'),
			exa = cardEdit['examples'],
			tempExa = exa.map(function (value, index) {
	     		return {value:value, index: index}
	     	});
     	return tempExa;
	}, 
	setModalHeight: function () {
		return (window.innerHeight - 250) + 'px';
	}
});