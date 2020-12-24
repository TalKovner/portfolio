import React from 'react';
import '../style/Ball.css'

function Ball(props) {
    const classes = `ball ${props.animationName}`
    return(
        <div className={classes} >{props.children}</div>
    );
}


export default Ball;