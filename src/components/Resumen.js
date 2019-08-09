import React, { Component } from 'react';
import '../scss/Resumen.scss';
import { primeraMayuscula } from '../helpers/helper';

class Resumen extends Component {

   mostrarResumen = () => {
      const { marca, year, plan } = this.props.datosAuto;

      if (!marca || !year || !plan) return null;

      return (
         <div className="container">
            <div className="alert alert-primary resumen">
               <h2>Resumen de Cotización</h2>
               <ul className="listaDetalles">
                  <li>Marca: {primeraMayuscula(marca)}</li>
                  <li>Año: {year}</li>
                  <li>Plan: {primeraMayuscula(plan)}</li>
               </ul>
            </div>
         </div>
      );
   }

   render() {
      return (
         <div>
            {this.mostrarResumen()}
         </div>
      )
   }
}

export default Resumen;