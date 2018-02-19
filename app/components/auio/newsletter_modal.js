import React, {Component} from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import MailForm from './mailform';

export default class NewsletterModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {

  const { open, dimmer } = this.state

  return(
    <div>
    <h1 onClick={this.show('blurring')}>Newsletter bestellen</h1>
  <Modal closeIcon dimmer={dimmer} open={open} onClose={this.close}>
    <Header className="akko" icon='mail' content='Newsletter' />
    <Modal.Content>
      <p>Interessierst Du Dich für das Projekt? Dann trage Deine Emailadresse in den Newsletter ein und Du bleibst stets informiert.</p>
      <MailForm />
    </Modal.Content>
  </Modal>
  </div>
)};
}
