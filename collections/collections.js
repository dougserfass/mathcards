if (Mongo.Collection.get('cards') == undefined) {
  Cards = new Mongo.Collection('cards');
}