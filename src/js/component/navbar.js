import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Starimage from "../../img/star-wars.png";
import { Context } from "../store/appContext.js";

export const Navbar = (_id) => {
	const { store, actions } = useContext(Context)
 
	return (
		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button className="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>


		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
				<div className="container">
					<Link className="navbar-brand" to="/"><img className="start-imagen" src={Starimage} /></Link>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div className="dropdown">
							<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown button <span className="numberFavorites">{store.favorites.length}</span> 
							</button>
							<ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1">

								{store.favorites.length  <= 0 ? "(Empit)" :
								store.favorites.map((item) => {
									// item == [""] ? {"Empit"} : "hola"
									return <li className="dropdown-item" key={item._id} > <Link className="enlace" to="/">{item.properties.name} </Link>  <button onClick={() => actions.clearFavorites(item._id)} className="btn btn-transparent"> <i className="fa-solid fa-trash"></i> </button></li>

								}) }
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
