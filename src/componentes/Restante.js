import React, {Component} from 'react';
import {revisarPresupuesto} from '../helper';
import PropTypes from 'prop-types';

class Restante extends Component {
	render(){
		const presupuesto = this.props.presupuesto;
		const restante = this.props.restante;
	
		return(
			<div className={revisarPresupuesto(presupuesto, restante)}>
				Restante $ {restante}
			</div>
		)
	}
}

Restante.propTypes = {
	presupuesto: PropTypes.string,
	restante: PropTypes.string
}

export default Restante;