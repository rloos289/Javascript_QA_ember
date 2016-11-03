import Ember from 'ember';

export default Ember.Component.extend({
  currentQuestion: null,
  toggleUpdate: false,
  toggleAnswer: false,
  actions: {
    newQuestion(){
      this.set('toggleAnswer', false);
      this.set('toggleUpdate', false);
    },
    saveQuestion(params) {
      this.sendAction('saveQuestion', params);
    },
    //manage updates
    toggleUpdate(question) {
      this.toggleProperty('toggleUpdate');
      this.set('currentQuestion', question);
      this.set('toggleAnswer', false);
    },
    updateQuestion(params) {
      this.sendAction('updateQuestion', this.currentQuestion, params);
      this.set('toggleUpdate', false);
    },
    //manage answers
    toggleAnswer(question) {
      this.toggleProperty('toggleAnswer');
      this.set('currentQuestion', question);
      this.set('toggleUpdate', false);
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
    },
    saveRating(rating, answer) {
      this.sendAction('saveRating',rating, answer);
    },
  }
});
