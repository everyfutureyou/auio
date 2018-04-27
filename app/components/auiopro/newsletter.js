import React, { Component } from 'react';
import MailForm from './mailform';

export default class Newsletter extends Component {
  render() {
    return (
      <div id="Newsletter">
        <div className="paperStyle">
          <h2>Newsletter</h2>
          <p>Wir werden diese Website bis zum Start der Plattform im August mindestens einmal im Monat aktualisieren. Wenn Du dich in den Newsletter einträgst, werden wir dafür sorgen, dass Du nichts Wichtiges verpasst!</p>
          <MailForm />
        </div>
      </div>
    );
  }
}
