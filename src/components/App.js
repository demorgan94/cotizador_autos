import React, { Component } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import { yearDiff, calcularMarca, obtenerPlan } from '../helpers/helper';
import Resultado from './Resultado';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      data: {}
    }
  }

  handleSubmit = (data) => {
    const { marca, year, plan } = data;

    // Agregar una base de 2000
    let resultado = 2000;

    // Obtener la diferencia de años y por cada año restar el 3% al valor del seguro
    const diff = yearDiff(year);
    resultado -= ((diff * 3) * resultado) / 100;

    // Europeo 30%, Americano 15% y Asiatico 5% de aumento al valor actual
    resultado = calcularMarca(marca) * resultado;

    // Plan basico incrementa valor en 20% y completo en 50%
    let incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    // Crear objeto para el resumen
    const datosAuto = {
      marca: marca,
      year: year,
      plan: plan
    }

    this.setState({
      resultado: resultado,
      data: datosAuto
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-0">
            <Header titulo="Cotizador de Seguro de Autos" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Formulario handleSubmit={this.handleSubmit} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Resumen datosAuto={this.state.data} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Resultado resultado={this.state.resultado}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
