import Ember from 'ember';

export default Ember.Component.extend({
  showDetails: false,
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
  }
});
