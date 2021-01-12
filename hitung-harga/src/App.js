import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Alert from './Component/Alert'

class App extends Component {
  state = {
    harga: '',
    ppn: '',
    diskon: '',
    hasil: '',
    alert: false,
  };


  ubahNilaiInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  hitung_ppn = () => {
    const { harga, ppn } = this.state;

    return (harga / 100) * ppn;
  };

  hitung_diskon = () => {
    const { harga, diskon } = this.state;

    return (harga / 100) * diskon;
  };

  hitung = (e) => {
    e.preventDefault();
    const {harga} = this.state;

    const hasilAkhir = ( harga - this.hitung_diskon() ) + this.hitung_ppn();

    this.setState({
      hasil: hasilAkhir,
      alert: true
    });
  };

  render() {
    const { alert, hasil, harga, ppn, diskon } = this.state;

    return (
      <div className="App container col-sm-4">
        <div className="card-body bg-danger">
          <h1>Hitung Harga Akhir</h1>
        </div>
        <hr />
        <form onSubmit={this.hitung}>
          <div className="form-group">
            <label>Harga Awal</label>
            <input 
            className="form-control"
            type="text"
            name="harga"
            value={harga}
            onChange={this.ubahNilaiInput}
            placeholder="masukkan harga awal"
            />
          </div>

          <div className="form-group">
            <label>PPN</label>
            <input 
            className="form-control"
            type="text"
            name="ppn"
            value={ppn}
            onChange={this.ubahNilaiInput}
            placeholder="masukkan ppn"
            />
          </div>

          <div className="form-group">
            <label>Diskon</label>
            <input 
            className="form-control"
            type="text"
            name="diskon"
            value={diskon}
            onChange={this.ubahNilaiInput}
            placeholder="masukkan diskon"
            />
          </div>

          <div className="card-body bg-light grey">
            <button className="form-control btn btn-danger" type="submit">
              Hitung
            </button>
            <h5 className="text-center">Harga Akhir</h5>
            {/* menggunakan bentuk lain if */}
            {alert ? <Alert des={hasil} /> : null}
          </div>
        </form>
      </div>
    );
  }
}

export default App;
