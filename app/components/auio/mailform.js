import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class MailForm extends Component {
  state = {}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({ email: '', name: '' })

  render() {
    const { name, email } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
          <Form.Input placeholder='Email' name='email' value={email} onChange={this.handleChange} />
          <Form.Button color='green' content='Eintragen' />
        </Form.Group>
      </Form>
    )
  }
}

export default MailForm;
