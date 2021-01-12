import React, { Component } from 'react';
// import '../App.css';
// Jquery aku comment karena nggak dipake
// import { extend } from 'jquery';
import Alert from './Component/Alert';

class App extends Component {
  // aku tambahi 2 state dan 1 perubahan value
  // hasil untuk menyimpan hasil hitung
  // alert sebagai syarat apakah alert perlu tampil atau tidak
  // periode aku kasih angka 6 sebagai value default tag select (6 bulan)
  state = {
    nominal: '',
    bunga: '',
    periode: 6,
    hasil: '',
    alert: false,
  };

  ubahNilaiInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  hitung_angsuran = () => {
    const { nominal, periode } = this.state;

    return nominal / periode;
  };

  hitung_bunga = () => {
    const { nominal, bunga, periode } = this.state;

    return (nominal * bunga) / 100 / periode;
  };

  hitung = (e) => {
    e.preventDefault();

    const hasilAkhir = this.hitung_angsuran() + this.hitung_bunga();

    // masukkan isi hasilAkhir ke state hasil
    // dan set state alert ke true untuk menampilkan component Alert
    this.setState({
      hasil: hasilAkhir,
      alert: true,
    });

    // dengan code diatas kita sudah tidak perlu memanggil atau menggunakan function keterangan
  };

  // Function keterangan aku hapus karena sudah tidak digunakan

  render() {
    // mempersingkat pemanggilan dan
    // kita akan menggunakan 2 state ini
    const { alert, hasil, nominal, bunga, periode } = this.state;
    return (
      <div className="App container col-sm-4">
        <div className="card-body bg-info">
          <h1>Cicilan Bank</h1>
        </div>
        <hr />
        <form onSubmit={this.hitung}>
          <div className="form-group row">
            <label className="col-sm-5 col-form-label">Nominal</label>

            {/* tidak perlu pake this.state karena udah disingkat di atas */}
            <input
              className="form-control col-sm-5"
              type="text"
              name="nominal"
              value={nominal}
              onChange={this.ubahNilaiInput}
              placeholder="masukkan nominal"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-5 col-form-label">Bunga</label>

            {/* tidak perlu pake this.state karena udah disingkat di atas */}
            <input
              className="form-control col-sm-5"
              type="text"
              name="bunga"
              value={bunga}
              onChange={this.ubahNilaiInput}
              placeholder="masukkan bunga"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-5 col-form-label">Periode</label>

            {/* tidak perlu pake this.state karena udah disingkat di atas */}
            <select
              className="form-control col-sm-5"
              name="periode"
              value={periode}
              onChange={this.ubahNilaiInput}
            >
              {/* value pada tag option berfungsi sebagai value dari tag select (atasnya), 
               bisa dicoba dengan mengganti state periode menjadi 12 (di web akan jadi 12 bulan) */}
              <option value={6}>6 bulan</option>
              <option value={12}>12 bulan</option>
              <option value={24}>24 bulan</option>
            </select>
          </div>
          <div className="card-body bg-light grey">
            <button className="form-control btn btn-info" type="submit">
              Hitung
            </button>

            {/* kita menggunakan bentuk lain if, 
             jadi jika state alert = true, maka kita tampilkan Component Alert, jika false, jangan tampilkan apa-apa */}
            {alert ? <Alert des={hasil} /> : null}
          </div>
        </form>
      </div>
    );
  }
}

export default App;
