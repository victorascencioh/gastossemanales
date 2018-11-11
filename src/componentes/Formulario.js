import React, {Component} from 'react';
import PropTypes from 'prop-types';
	
class Formulario extends Component {

	//refs para gastos de formulario
	nombreGastoRef = React.createRef();
	cantidadGastoRef = React.createRef();

	crearGasto = (e) => {
		//prevenir default
		e.preventDefault();

		//crear objeto
		const gasto = {
			nombreGasto: 	this.nombreGastoRef.current.value,
			cantidadGasto: 	this.cantidadGastoRef.current.value
		}
	
		//agregar y enviar el formulario
		this.props.agregarGasto(gasto);

		//resetear formulario
		e.currentTarget.reset();

	}

	render() {
		return(
			<form className="cotizar-gasto" onSubmit={this.crearGasto}>
					<div className="campo">
						<label>Nombre Gasto</label>
						<input className="u-full-with"
						name="gasto" 
						type="text"
						placeholder="Ej. Transporte" 
						required ref={this.nombreGastoRef}/>
					</div>
					<div className="campo">
						<label>Cantidad</label>
						<input className="u-full-with"
						name="cantidad" 
						placeholder="Ej. 300" 
						required ref={this.cantidadGastoRef}/>
					</div>
					
					<input className="button-primary
					u-full-with" type="submit"
					value="Agregar"	/>
			</form>
		)
	}
}

Formulario.propTypes = {
	agregarGasto: PropTypes.func.isRequired
}

export default Formulario;

