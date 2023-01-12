import React from "react";
//esto es una contaste el onPrevious y elonNext esto son funcionen que se van ejecutar respetivamente en cada handle ose las cosntastes que estan abajo
const Pagination = ({ prev, next, onPrevious, onNext }) => {
    const handleAtras = () => {
        onPrevious();
    }
    const handleSiguente = () => {
        onNext();
    }
    return (
        <nav className="my-5">
            <ul className="pagination justify-content-center">
                {
                    prev ?
                        <li className="page-item">
                            <button className="page-link" onClick={handleAtras}>Atras</button>

                        </li>
                        :
                        null
                }
                {
                    next ?
                    <li className="page-item">
                    <button className="page-link" onClick={handleSiguente}>Siguente</button>
                </li>
                :
                null
                }

               
            </ul>
        </nav>
    )
}
export default Pagination