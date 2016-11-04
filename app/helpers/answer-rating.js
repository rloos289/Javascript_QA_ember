import Ember from 'ember';

export function answerRating(params) {
  var ratingAverage = params[0].get('rating');

  var stars = "";
  for (var i = 0; i < ratingAverage; i++) {
    stars += '<span class="glyphicon glyphicon-star "></span>'
  }
  return Ember.String.htmlSafe(stars);
}

export default Ember.Helper.helper(answerRating);
