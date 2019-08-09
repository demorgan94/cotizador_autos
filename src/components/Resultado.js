import React, { Component } from 'react';
import '../scss/Resultado.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Resultado extends Component {

   render() {
      const resultado = this.props.resultado;

      if (!resultado) return null;

      return (
         <div className="container">
            <div className="alert alert-dark resultado">
               <p>El total es: ${this.props.resultado}</p>
            </div>
         </div>
      )
   }
}

export default Resultado;