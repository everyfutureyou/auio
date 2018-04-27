import React, { Component } from 'react';
import { Icon, Modal } from 'semantic-ui-react';
import scrollToComponent from 'react-scroll-to-component';

const style = {
  background: '#404047',
};

export default class NewsletterModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Icon name="bars" size="big" fitted onClick={this.show('blurring')} />
        <Modal
          style={style}
          closeIcon
          dimmer={dimmer}
          basic
          open={open}
          onClose={this.close}
        >
          <Modal.Content>
            <div className="menu-mobile">
              <div className="menu-list">
                <div onClick={() => scrollToComponent(document.getElementById('about'), { offset: -80, align: 'top', duration: 1500 })}>
                  Über das <span className="green">Projekt!</span>
                </div>
                <div onClick={() => scrollToComponent(document.getElementById('autismus'), { offset: -80, align: 'top', duration: 1500 })}>
                  Was ist <span className="yellow">Autismus?</span>
                </div>
                <div onClick={() => scrollToComponent(document.getElementById('autismus'), { offset: -80, align: 'top', duration: 1500 })}>
                  Events
                </div>
                <div onClick={() => scrollToComponent(document.getElementById('contact'), { offset: -80, align: 'top', duration: 1500 })}>
                  Kontakt
                </div>
              </div>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
