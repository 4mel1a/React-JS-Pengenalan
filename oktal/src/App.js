import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Alert from './Component/Alert';

class App extends Component {
  state = {
    oktal: '',
    pilihan: 'heksadesimal',
    hasil: '',
    alert: false
  };

  ubahNilaiInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  hitung = (e) => {
    e.preventDefault();
    const {pilihan, oktal} = this.state;
    const convert  = pilihan;

    switch(convert) {
      case 'biner':
        const biner = parseInt(oktal, 8).toString(2)
        return this.setState({ hasil: biner, alert: true });
      case 'desimal':
        const desimal = parseInt(oktal, 8)
        return this.setState({ hasil: desimal, alert: true });
      case 'heksadesimal':
        const heksadesimal = parseInt(oktal, 8).toString(16)
        return this.setState({ hasil: heksadesimal, alert: true });
    };

  }

  render() {
    const { alert, hasil, oktal, pilihan } = this.state;
    return (
      <div className="App container col-sm-4">
        <div className="card-body bg-danger">
          <h2>Konversi Bilangan Oktal</h2>
        </div>
        <hr />
        <form onSubmit={this.hitung}>
          <div className="form-group">
            <label className="col-sm-5 col-form-label">Oktal</label>
            <input
              className="form-control"
              type="text"
              name="oktal"
              value={oktal}
              onChange={this.ubahNilaiInput}
              placeholder="masukkan bilangan oktal"
            />
          </div>
          <div className="form-group">
            <label className="col-sm-5 col-form-label">Pilihan</label>
            <select
              className="form-control"
              name="pilihan"
              value={pilihan}
              onChange={this.ubahNilaiInput}
            >
              <option value='biner'>biner</option>
              <option value='desimal'>desimal</option>
              <option value='heksadesimal'>heksadesimal</option>
            </select>
          </div>
          <div className="card-body bg-light grey">
            <button className="form-control btn btn-danger" type="submit">
              Convert
            </button>
            {alert ? <Alert des={hasil} /> : null}
          </div>
        </form>
      </div>
    )
  }
}

export default App;
