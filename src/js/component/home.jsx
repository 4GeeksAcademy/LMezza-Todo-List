import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [listaTareas, setListaTareas] = useState([])

	function agregarTarea(event) {
		setTarea(event.target.value);
	}

	function agregarLista(event) {
		// console.log(event);
		// condicionar el evento al presionar enter
		if (event.keyCode === 13) {
			// quiero que se agregue tarea en lista tarea
			// option? setFruits(fruits.concat('Manzana')) 'forma directa'

			let newArray = listaTareas.concat(tarea)
			setListaTareas(newArray)
			setTarea("");
		}
	}

	function eliminarTarea(indexTareaAeliminar) {
		// console.log(indexTareaAeliminar);

		let listaEliminada = listaTareas.filter((item, index) => { return index != indexTareaAeliminar });
		// console.log(listaEliminada);
		setListaTareas(listaEliminada)
	}
	// Ejercicio a base de Bootstrap
	return (
		<div className="container mt-5 w-50">
			<div className="d-flex justify-content-center fs-2 mb-2"><input className="w-75 border-2 rounded-pill text-center" type="text" placeholder="What do you need to do?" onKeyDown={agregarLista} value={tarea} onChange={agregarTarea} /></div>
			<ul className="my-2 p-0">
				{/* Crear con map lista */}
				{/* {listaTareas.map((item, index) => <li id="mapeo" key={index}>{item}<button id="boton" type="button" className="btn btn-light position end-0" onClick={() => eliminarTarea(index)}>x</button></li>)} */}
				{/* Crear con map y grid para posicionar los botones de eliminado */}
				<div className="list-group">
					{listaTareas.map((item, index) => {
						return (
							<li className="list-group-item list-group-item-dark" key={index}>
								<div className="row">
									<div className="col-lg-11 my-auto">
										{item}
									</div>
									<div className="col-lg-1 my-auto">
										<button type="button" className="btn btn-light position end-0" onClick={() => eliminarTarea(index)}>x</button>
									</div>
								</div>
							</li>
						)
					})
					}
				</div>
			</ul>
			{listaTareas.length + ` Task left`}
		</div>
	);
};

export default Home;
