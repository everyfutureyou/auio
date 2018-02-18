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
    <Header className="akko" icon='mail' content='Newsletter bestellen' />
    <Modal.Content>
      <p>Wir werden deine Emailadresse nur verwenden, um dich auf dem Laufenden zu halten und nicht weitergeben.</p>
      <MailForm />
    </Modal.Content>
  </Modal>
  </div>
)};
}
