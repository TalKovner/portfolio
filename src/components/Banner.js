import React from 'react';
import '../style/Banner.css';

function Banner() {
    return(
        <section className="banner" id="home">
            <div className="textBx">
                <h2>Hello, My name is<br></br><span>Tal Kovner.</span></h2>
                <h3>I'm a Front End Developer.</h3>
                <a href="#about" className="btn">About Me</a>
            </div>
        </section>
    );
}

export default Banner;
