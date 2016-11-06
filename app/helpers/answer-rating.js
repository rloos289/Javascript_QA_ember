import Ember from 'ember';

export function answerRating(rating) {
  var stars = "";
  for (var i = 0; i < rating; i++) {
    stars += '<span class="glyphicon glyphicon-star "></span>'
  }
  return Ember.String.htmlSafe(stars);
}

export default Ember.Helper.helper(answerRating);
