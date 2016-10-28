import Ember from 'ember';

export default Ember.Component.extend({
  showDetails: false,
  actions: {
    switchToUpdate(question) {
      this.sendAction('switchToUpdate', question);
    },
    toggleAnswer(question) {
      this.sendAction('toggleAnswer', question);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },
    showDetails(question) {
      this.toggleProperty('showDetails', question);
    },
  }
});
