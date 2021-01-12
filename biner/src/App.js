import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Alert from './Component/Alert';

class App extends Component {
  state = {
    biner: '',
    pilihan: 'oktal',
    hasil: '',
    alert: false
  };

  ubahNilaiInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  hitung = (e) => {
    e.preventDefault();
    const { pilihan, biner } = this.state;
    const convert = pilihan;

    switch(convert) {
      case 'oktal':
        const oktal = parseInt(biner, 2).toString(8)
        return this.setState({ hasil: oktal, alert: true });
      case 'desimal':
        const desimal = parseInt(biner, 2)
        return this.setState({ hasil: desimal, alert: true });
      case 'heksadesimal':
        const heksadesimal = parseInt(biner, 2).toString(16)
        return this.setState({ hasil: heksadesimal, alert: true });
    };
    // console.log(convert);
    // this.setState({
    //   hasil: convert,
    //   alert: true
    // });

  };

  render() {
    const { biner, pilihan, hasil, alert } = this.state;
    return (
      <div className="App container col-sm-4">
        <div className="card-body bg-danger">
          <h2>Konversi Bilangan Biner</h2>
        </div>
        <hr />
        <form onSubmit={this.hitung}>
          <div className="form-group">
            <label className="col-sm-5 col-form-label">Biner</label>
            <input
              className="form-control"
              type="text"
              name="biner"
              value={biner}
              onChange={this.ubahNilaiInput}
              placeholder="masukkan bilangan biner"
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
