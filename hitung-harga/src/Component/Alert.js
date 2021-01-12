import React, {Component} from 'react';

class Alert extends Component {
    render() {
        const { des } = this.props;
        return (
            <div className="alert alert-dark alert-dismissible">
                Rp.{des}
            </div>
        );
    }
}

export default Alert;