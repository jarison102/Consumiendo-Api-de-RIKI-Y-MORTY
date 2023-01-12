import React from "react";
const Characters = ({ characters }) => {
    return (
        <div className="row">
            {
                //cada item es cada personaje que estamos recibiendo
                characters.map((item, index) => (
                    //retorna las  columnas
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "200px" }}>
                            <img src={item.image} alt="" />
                            <div className="card-boby">
                                <h5 className="card-title">{item.name}</h5>
                                <hr/>
                                <p>Especie: {item.species}</p>
                                <p>Muerto O Vivo: {item.status}</p>
                                <p>Sexo: {item.gender}</p>
                                <p>Donde Vive : {item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}
export default Characters