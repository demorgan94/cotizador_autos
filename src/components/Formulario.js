import React, { Component } from 'react';
import '../scss/Formulario.scss';

class Formulario extends Component {

   marcaRef = React.createRef();
   yearRef = React.createRef();
   planBasicoRef = React.createRef();
   planCompletoRef = React.createRef();

   handleSubmit = (e) => {
      e.preventDefault();

      const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';

      const infoAuto = {
         marca: this.marcaRef.current.value,
         year: this.yearRef.current.value,
         plan: plan
      }

      this.props.handleSubmit(infoAuto);
   }

   render() {
      return (
         <div className="container">
            <form>
               <div className="form-group">
                  <label>Marca</label>
                  <select className="form-control" name="marca" ref={this.marcaRef}>
                     <option value="americano">Americano</option>
                     <option value="europeo">Europeo</option>
                     <option value="asiatico">Asiatico</option>
                  </select>
               </div>
               <div className="form-group">
                  <label>Año</label>
                  <select className="form-control" name="año" ref={this.yearRef}>
                     <option value="2019">2019</option>
                     <option value="2018">2018</option>
                     <option value="2017">2017</option>
                     <option value="2016">2016</option>
                     <option value="2015">2015</option>
                     <option value="2014">2014</option>
                     <option value="2013">2013</option>
                     <option value="2012">2012</option>
                     <option value="2011">2011</option>
                     <option value="2010">2010</option>
                     <option value="2009">2009</option>
                     <option value="2008">2008</option>
                  </select>
               </div>
               <div className="check">
                  <label className="plan_lbl">Plan:</label>
                  <div className="form-check form-check-inline">
                     <input className="form-check-input" name="plan" type="radio" value="basico" ref={this.planBasicoRef} />
                     Basico
                  </div>
                  <div className="form-check form-check-inline">
                     <input className="form-check-input" name="plan" type="radio" value="completo" ref={this.planCompletoRef} />
                     Completo
                  </div>
               </div>
               <div className="text-center">
                  <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Cotizar</button>
               </div>
            </form>
         </div>
      );
   }
}

export default Formulario;