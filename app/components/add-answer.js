import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer(params) {
       params = {
        answer: this.get('answer'),
        author: this.get('author'),
        rating: [0],
      };
      if (!params.answer || !params.author) {
        alert('please fill all fields');
      } else {
        this.sendAction('addAnswer', params);
        this.set('answer', '');
        this.set('author', '');
      }
    },
    newQuestion(){
      this.sendAction('newQuestion');
    }
  }
});
