import React, {Component} from 'react';
import { Callbacks } from 'jquery';

class Alert extends Component {
    render() {
        const { des } = this.props;
        return (
            <div className="alert">
                Hasil Convert = {des}
            </div>
        )
    }
}

export default Alert;