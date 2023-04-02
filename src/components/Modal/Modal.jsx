import React, { Component } from 'react';
import { Overlay, ModalWraper } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const {
      select: { url, alt },
    } = this.props;
    return (
      <Overlay onClick={this.handleClick}>
        <ModalWraper>
          <img src={url} alt={alt} />
        </ModalWraper>
      </Overlay>
    );
  }
}
