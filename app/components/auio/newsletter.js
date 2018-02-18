import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import MailForm from './mailform';
import ModalExampleCloseIcon from './newsletter_modal';

export default class Newsletter extends Component {
  render() {
  return(
  <div id="Newsletter">
    <div className="paperStyle">
      <h2>Newsletter</h2>
      <p>Wir werden diese Website bis zum Start der Plattform im August mindestens einmal im Monat aktualisieren. Wenn Du dich in den Newsletter einträgst, werden wir dafür sorgen, dass Du nichts Wichtiges verpasst!</p>
      <MailForm />
    </div>
  </div>
)};
}
