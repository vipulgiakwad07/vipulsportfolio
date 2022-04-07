
import React from 'react';
import { Form, Input, TextArea,Button} from 'semantic-ui-react';

const Contact = () => {
  
  {/* --- handleOnSubmit method --- */}
  return (
    <div className='App'>
       
      <Form /*onSubmit={handleOnSubmit}onSubmit={handleOnSubmit}*/ >
      <h2>Get in touch</h2>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
      <Button variant="contained">
        Send
      </Button>
      </Form>
    </div>
  );
}
export default Contact;
