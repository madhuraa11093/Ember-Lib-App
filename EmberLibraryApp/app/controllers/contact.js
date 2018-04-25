import Controller from '@ember/controller';
import { match, not, and, empty } from '@ember/object/computed';


export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  messageFromCustomer:'',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isMessageEmpty :empty('messageFromCustomer'),
  MessageValid:not('isMessageEmpty'),
  isNotDisabled: and('isValidEmail','MessageValid'),
  isDisabled:not('isNotDisabled'),

  actions: {

    saveMessage() {
      alert(`Saving of the message for email address:: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address and message')}`);
      this.set('emailAddress', '');
      this.set('message','');
    }
  }

});
