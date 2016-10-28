import Ember from 'ember';

export default Ember.Component.extend({
  currentQuestion: null,
  switchToUpdate: false,
  actions: {
    saveQuestion(params) {
      this.sendAction('saveQuestion', params);
    },
    switchToUpdate(question) {
      this.set('switchToUpdate', true);
      this.set('currentQuestion', question);
    }
  }
});
