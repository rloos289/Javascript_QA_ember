import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('question.answers','sortBy'),
  actions: {
    toggleAnswer(question) {
      this.sendAction('toggleAnswer', question);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    rateAnswer(rating, answer) {
      var rating = parseInt(rating);
      this.sendAction('saveRating', rating, answer);
    }
  }
});
