import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  showDetails: false,
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
    showDetails(question) {
      this.toggleProperty('showDetails', question);
    },
    saveRating(rating, answer) {
      this.sendAction('saveRating',rating, answer);
    },
    addToFavorite(question) {
      this.get('favoriteQuestions').add(question);
    },
    // openModalDialog() {
    //   this.sendAction('openModalDialog');
    // }
  }
});
