import { useParams } from "react-router-dom";
import React, { useContext,  useState, useEffect } from "react";
import { Context } from "../store/appContext.js";

const Details = ({persona}) =>{
    const { store } = useContext(Context);
    let params = useParams()
    let {people, planets, vehicles} = store;
    const {nature, id } = params;

    const [detail, setDetail] = useState({});

    const getDetalils = () =>{
        const detalle = store[nature].find(item => item.uid === id);
        if(detalle){
            setDetail(detalle)
        }
    }
   
    console.log(detail)
    useEffect(() =>{
        getDetalils();
    }, [] );
    return(
        <>
            {nature == "people" ?
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <img src="https://images.pexels.com/photos/5960986/pexels-photo-5960986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-6 text-center px-4">
                        <h1>{ detail.properties?.name} </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="col-12 detalles py-4 text-danger mt-5">
                        <div className="row text-center px-4">
                            <div className="col-2">
                                <h4>Name</h4>
                                <p>{ detail.properties?.name}</p>
                            </div>
                            <div className="col-2">
                                <h4>Birth Year</h4>
                                <p>{ detail.properties?.birth_year}</p>
                            </div>
                            <div className="col-2">
                                <h4>Gender</h4>
                                <p>{ detail.properties?.gender}</p>
                            </div>
                            <div className="col-2">
                                <h4>Height</h4>
                                <p>{ detail.properties?.height}</p>
                            </div>
                            <div className="col-2">
                                <h4>Skin Color</h4>
                                <p>{ detail.properties?.skin_color}</p>
                            </div>
                            <div className="col-2">
                                <h4>Eye Color</h4>
                                <p>{ detail.properties?.eye_color}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                     
            : nature == "planets" ?
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <img src="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-6 text-center px-4">
                        <h1>{ detail.properties?.name} </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="col-12 detalles py-4 text-danger mt-5">
                        <div className="row text-center px-4">
                            <div className="col-2">
                                <h4>Name</h4>
                                <p>{ detail.properties?.name}</p>
                            </div>
                            <div className="col-2">
                                <h4>Climate</h4>
                                <p>{ detail.properties?.climate}</p>
                            </div>
                            <div className="col-2">
                                <h4>Population</h4>
                                <p>{ detail.properties?.population}</p>
                            </div>
                            <div className="col-2">
                                <h4>Rotation Period</h4>
                                <p>{ detail.properties?.rotation_period}</p>
                            </div>
                            <div className="col-2">
                                <h4>Surface Water</h4>
                                <p>{ detail.properties?.surface_water}</p>
                            </div>
                            <div className="col-2">
                                <h4>Terrain</h4>
                                <p>{ detail.properties?.terrain}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : nature == "vehicles" ? 
            <div className="container">
            <div className="row">
                <div className="col-6">
                <img src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                </div>
                <div className="col-6 text-center px-4">
                    <h1>{ detail.properties?.name} </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ducimus omnis doloremque eum animi, neque nesciunt ipsam, consequuntur architecto tempora consectetur rerum repellendus. Ea, esse? Rem cumque recusandae rerum deleniti!</p>
                </div>
                <div className="col-12 detalles py-4 text-danger mt-5">
                    <div className="row text-center px-4">
                        <div className="col-2">
                            <h4>Name</h4>
                            <p>{ detail.properties?.name}</p>
                        </div>
                        <div className="col-2">
                            <h4>Cargo Capacity</h4>
                            <p>{ detail.properties?.cargo_capacity}</p>
                        </div>
                        <div className="col-2">
                            <h4>Manufacturer</h4>
                            <p>{ detail.properties?.manufacturer}</p>
                        </div>
                        <div className="col-2">
                            <h4>Model</h4>
                            <p>{ detail.properties?.model}</p>
                        </div>
                        <div className="col-2">
                            <h4>Passengers</h4>
                            <p>{ detail.properties?.passengers}</p>
                        </div>
                        <div className="col-2">
                            <h4>Vehicle Class</h4>
                            <p>{ detail.properties?.vehicle_class}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            : null
        }

            {/* <div className="container">
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-6 text-center px-4">
                        <h1>{`${params.nature} ${params.id}`} </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ducimus omnis doloremque eum animi, neque nesciunt ipsam, consequuntur architecto tempora consectetur rerum repellendus. Ea, esse? Rem cumque recusandae rerum deleniti!</p>
                    </div>
                    <div className="col-12 detalles py-4 text-danger">
                        <div className="row text-center px-4">
                            <div className="col-2">
                                <h4>Name</h4>
                                <p>name</p>
                            </div>
                            <div className="col-2">
                                <h4>Birth Year</h4>
                                <p>Birth Year</p>
                            </div>
                            <div className="col-2">
                                <h4>Gender</h4>
                                <p>Gender</p>
                            </div>
                            <div className="col-2">
                                <h4>Height</h4>
                                <p>Hegiht</p>
                            </div>
                            <div className="col-2">
                                <h4>Skin Color</h4>
                                <p>Skin Color</p>
                            </div>
                            <div className="col-2">
                                <h4>Eye Color</h4>
                                <p>Eyes Colors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Details;