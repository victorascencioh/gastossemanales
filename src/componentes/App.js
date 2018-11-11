import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../helper';
import ControlPresupuesto from './ControlPresupuesto';
class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('¿Cuál es tu presupuesto?');
    let resultado = validarPresupuesto(presupuesto);

    if(resultado) {
      this.setState({
        presupuesto,
        restante: presupuesto
      });
    } else {
      this.obtenerPresupuesto();
    }
  }
 
  agregarGasto = gasto => {
      const gastos = {...this.state.gastos};

      //Agregar al gasto al objeto del state
      gastos[`gasto${Date.now() }`] = gasto;

      //Restar el presupuesto
      this.restarPresupuesto(gasto.cantidadGasto);
      //ponerlo en state
      this.setState({
        gastos
      })
  }

  //Restar del presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad => {
    //leer el gasto
    let restar = Number(cantidad);

    //tomar copia del state
    let restante = this.state.restante;
    //lo restamos
    restante -=restar;

    restante = String(restante);
    //agregamos nuevo state
    this.setState({
      restante
    })
  }

  render() {
    return (
      <div className="App container">
        <Header 
            titulo="Gastos Semanales"
          />
          <div className="contenido-principal contenido">
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  agregarGasto={this.agregarGasto}
                />
              </div>
              <div className="one-half column">
                <Listado 
                    gastos={this.state.gastos}
                />
                <ControlPresupuesto 
                  presupuesto={this.state.presupuesto}
                  restante={this.state.restante}
                />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
