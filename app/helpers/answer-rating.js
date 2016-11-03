import Ember from 'ember';

export function answerRating(params) {
  var ratingAverage = params[0].get('rating');

  if (ratingAverage > 4) {
    return "*****";
  } else if (ratingAverage >= 3) {
    return "****";
  } else if (ratingAverage >= 2) {
    return "***";
  } else if (ratingAverage >= 1) {
    return "**";
  } else {
    return "*";
  }
}

export default Ember.Helper.helper(answerRating);
