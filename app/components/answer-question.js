import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleUpdate(question) {
      this.sendAction('toggleUpdate', question);
      this.sendAction('openModalDialog');
    },
    toggleAnswer(question) {
      this.sendAction('toggleAnswer', question);
      this.sendAction('openModalDialog');
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },
    saveRating(rating, answer) {
      this.sendAction('saveRating',rating, answer);
    },
    showDetails(question) {
      this.sendAction('showDetails', question);
    },
  }
});
