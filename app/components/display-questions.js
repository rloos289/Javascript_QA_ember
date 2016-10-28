import Ember from 'ember';

export default Ember.Component.extend({
  currentQuestion: null,
  switchToUpdate: false,
  currentAnswer: null,
  toggleAnswer: false,
  actions: {
    saveQuestion(params) {
      this.sendAction('saveQuestion', params);
    },
    //manage updates
    switchToUpdate(question) {
      this.set('switchToUpdate', true);
      this.set('currentQuestion', question);
    },
    updateQuestion(params) {
      this.sendAction('updateQuestion', this.currentQuestion, params);
      this.set('showUpdateComment', false);
    },
    //manage answers
    toggleAnswer(question) {
      this.set('toggleAnswer', true);
      this.set('currentQuestion', question);
    },
    addAnswer(params) {
      // this.set('currentAnswer', answer);
      this.sendAction('addAnswer', this.currentQuestion, params);
      this.set('toggleAnswer', false);
    },
    //delete
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer)
    }
  }
});
