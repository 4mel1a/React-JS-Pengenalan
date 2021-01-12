import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { extend } from 'jquery';
import Alert from './Component/Alert';

class App extends Component {
  // Initial state
  state = {
    tinggi: '',
    berat: '',
    hasil: undefined,
  };

  // function ubah nilai input ke state
  ubahNilaiInput = (e) => {
    // cara cepat agar bisa memanggil name dan value tanpa harus menulis e.target.name
    // e.target.name diprsingkat jadi name
    // e.target.value diprsingkat jadi value
    const { name, value } = e.target;

    // setState berdasarkan property name dan value pada tag input
    this.setState({ [name]: value });
  };

  hitung = (e) => {
    // agar form tidak redirect saat di Submit
    e.preventDefault();

    // sama seperti di function ubahNilaiInput (untuk mempersingkat)
    const { tinggi, berat } = this.state;
    // Rumus hitumg
    const hasilAkhir = berat / tinggi ** 2;

    // mengubah nilai state hasil
    this.setState({ hasil: hasilAkhir });

    // Untuk memanggil component Alert
    return this.keterangan();
  };

  keterangan = () => {
    // untuk mempersingkat pemanggilan
    const { hasil } = this.state;

    // kondisi Alert
    if (hasil < 18.5) {
      return <Alert des="kurus" />;
    } else if (hasil >= 18.5) {
      return <Alert des="normal (ideal)" />;
    }
  };

  render() {
    // untuk mempersingkat pemanggilan
    const { berat, tinggi } = this.state;
    return (
      <div className="App container col-sm-4">
        <div className="card-body bg-light grey">
        <h1>Body Mass Index</h1>
        </div>
        <hr />
        <form onSubmit={this.hitung}>
          <div className="form-inline">
            <label className="col mr-sm-5">Berat</label>
            <input className="form-control"
              type="text"
              name="berat"
              value={berat}
              onChange={this.ubahNilaiInput}
              placeholder="masukkan berat badan"
            />
          </div>
          <br />
          <div className="form-inline">
            <label className="col mr-sm-5">Tinggi</label>
            <input className="form-control"
              type="text"
              name="tinggi"
              value={tinggi}
              onChange={this.ubahNilaiInput}
              placeholder="masukkan tinggi badan"
            />
          </div>
          <hr />
          <div className="card-body bg-light grey">
          <button className="form-control btn btn-info" type="submit">Hitung</button>
          <h4 className="text-center">Hasil</h4>
          {this.keterangan()}
          </div>
        </form>
        
      </div>
    );
  }
//   render() {
//     return (
//       <div className="App container col-sm-4">
//         <div className="card-body bg-light grey">
//           Body Mass Index
//         </div>
//         <hr />
//         <form onSubmit={this.hitung}>
//         <div className="form-inline">
//         <label className="col mr-sm-5 ">Berat</label>
//         <input className="form-control col sm-10" type="text" name="berat" value={this.state.berat} onChange={this.ubahBerat} />
//         </div>
//         <br />
//         <div className="form-inline">
//         <label className="col mr-sm-5">Tinggi</label>
//         <input className="form-control col sm-10" type="text" name="tinggi" value={this.state.tinggi} onChange={this.ubahTinggi} />
//         </div>
//         </form>
//         <br />
//         <div className="card-body bg-light grey">
//             <button className="form-control btn btn-info" onSubmit={this.hitung}>Hitung</button>
//             <h4>Hasil</h4>
//             {this.keterangan()}
//         </div>
//       </div>
//     );
//   }
  
}

export default App;
