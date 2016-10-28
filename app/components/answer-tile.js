import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleAnswer(question) {
      this.sendAction('toggleAnswer', question);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer)
    }
  }
});
