import React, {Component} from 'react';

class Alert extends Component {
    render() {
        // untuk mempersingkat pemanggilan
        // props digunakan untuk mengambil nilai yang ada pada file App.js atau component yang memanggil file ini
        const { des } = this.props;
        return (
            <div class="alert alert-success alert-dismissible">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
                {des}
            </div>
        );
    }
}

export default Alert;