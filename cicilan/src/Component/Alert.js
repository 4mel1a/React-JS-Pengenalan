import React, { Component } from 'react';

// Di siini cuma aku tambahin kalimat aja, jadi nggak ngaruh apa-apa
class Alert extends Component {
  render() {
    const { des } = this.props;
    return (
      <div className="alert alert-dark alert-dismissible">
        Cicilan bank anda adalah {des}
      </div>
    );
  }
}

export default Alert;
