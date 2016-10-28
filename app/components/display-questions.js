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
      this.toggleProperty('switchToUpdate');
      this.set('currentQuestion', question);
    },
    updateQuestion(params) {
      this.sendAction('updateQuestion', this.currentQuestion, params);
      this.set('switchToUpdate', false);
    },
    //manage answers
    toggleAnswer(question) {
      this.toggleProperty('toggleAnswer');
      this.set('currentQuestion', question);
    },
    addAnswer(params) {
      // this.set('currentAnswer', answer);
      this.sendAction('addAnswer', this.currentQuestion, params);
      this.set('toggleAnswer', false);
    },
    //delete
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    },
    deleteQuestion(question) {
      var answer_deletions = question.get('answers').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
    }
  }
});
