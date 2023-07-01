import React from 'react'

export default function Alert(props) {
    function capitaliseFirst(word){
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
    return (
        props.alert &&<div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
            <div>
                <strong>{capitaliseFirst(props.alert.type)}fully </strong>{props.alert.message}
            </div>
        </div>
    )
}
