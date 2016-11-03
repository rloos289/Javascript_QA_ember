import Ember from 'ember';

export function answerRating(params) {
  var ratingAverage = params[0].get('rating');
}

export default Ember.Helper.helper(answerRating);
