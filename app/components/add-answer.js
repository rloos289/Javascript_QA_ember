import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer(params) {
       params = {
        answer: this.get('answer'),
        author: this.get('author'),
      };
      this.sendAction('addAnswer', params);
      this.set('answer', '');
      this.set('author', '');
    },
    newQuestion(){
      this.sendAction('newQuestion');
    }
  }
});
