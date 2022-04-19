import React from 'react';
import './modal.css';

export default function Modal (props){

    return(
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className="modal__body" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    )
}