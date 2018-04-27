import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import SubscribeForm from 'react-mailchimp-subscribe';

const formProps = {
  action: 'https://everyfutureyou.us14.list-manage.com/subscribe/post?u=cff8540a1bf74937de6b7c72f&amp;id=1ad0519d70',
  messages: {
    inputPlaceholder: 'Emailadresse eintragen',
    btnLabel: <Form.Button color="green" content="Newsletter abonnieren" />,
    sending: 'Deine Emailadresse wird eingetragen...',
    success: 'Tadaa! Vielen Dank! Du hast erfolgreich unseren Newsletter abonniert.',
    error: 'Oops, da ist etwas schiefgelaufen.',
  },
};


class MailForm extends Component {
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => this.setState({ email: '', name: '' })

  render() {
    const { name, email } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} className="form-button">
        <SubscribeForm {...formProps} />
      </Form>
    );
  }
}

export default MailForm;
