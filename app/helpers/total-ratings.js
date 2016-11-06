import Ember from 'ember';

export function totalRatings(total) {
  return total[0].length - 1;
}

export default Ember.Helper.helper(totalRatings);
