import Ember from 'ember';

export function answerRating(params) {
  var ratingAverage = params[0].get('rating');

  var stars = "";
  for (var i = 0; i < ratingAverage; i++) {
    stars += '<span class="glyphicon glyphicon-star "></span>'
  }
  return Ember.String.htmlSafe(stars);
}
//make half stars or use 10 star system
//fix math
//dynamic updating
//fix feedback (empty objects coming in)
//sort by top rated answer
//average resets after refresh save them in db as empty array 


export default Ember.Helper.helper(answerRating);
