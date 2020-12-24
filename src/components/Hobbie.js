import React from 'react';

function Hobbie(props) {
    return(
        <div className={`${props.className} center`}>
            <img src={props.img} alt={props.alt} />
            <p>{props.name}</p>
        </div>
    );
}


export default Hobbie;