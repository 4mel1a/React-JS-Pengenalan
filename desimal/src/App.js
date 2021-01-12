import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Alert from './Component/Alert';

class App extends Component {
  state = {
    desimal: '',
    pilihan: 'biner',
    hasil: '',
    alert: false
  };

  ubahNilaiInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  hitung = (e) => {
    e.preventDefault();
    const { pilihan, desimal } = this.state;
    const convert = pilihan;

    switch(convert) {
      case 'oktal':
        const oktal = parseInt(desimal, 10).toString(8)
        return this.setState({ hasil: oktal, alert: true });
      case 'biner':
        const biner = parseInt(desimal, 10).toString(2)
        return this.setState({ hasil: biner, alert:true });
      case 'heksadesimal':
        const heksadesimal = parseInt(desimal, 10).toString(16)
        return this.setState({ hasil: heksadesimal, alert:true });
    };

  }

  render() {
    const { desimal, pilihan, hasil, alert } = this.state;
    return (
      <div className="App container col-sm-4">
        <div className="card-body bg-danger">
          <h2>Konversi Bilangan desimal</h2>
        </div>
        <hr />
        <form onSubmit={this.hitung}>
          <div className="form-group">
            <label className="col-sm-5 col-form-label">Desimal</label>
            <input
              className="form-control"
              type="text"
              name="desimal"
              value={desimal}
              onChange={this.ubahNilaiInput}
              placeholder="masukkan bilangan desimal"
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
              <option value='oktal'>oktal</option>
              <option value='biner'>biner</option>
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
