import Ember from 'ember';

export default Ember.Component.extend({
  showDetails: false,
  ratings: [],
  rating: 0,
  actions: {
    toggleAnswer(question) {
      this.sendAction('toggleAnswer', question);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    showDetails(question) {
      this.toggleProperty('showDetails', question);
    },
    rateAnswer(rating, answer) {
      var newRating = parseInt(rating);
      this.ratings.push(newRating);
      var newAverage = ((this.ratings).reduce(function(a, b) { return a + b; }, 0))/(this.ratings.length);
      this.set('rating', newAverage);
      this.sendAction('saveRating', this.rating, answer);
    }
  }
});
