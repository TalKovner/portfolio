import React from 'react'
import '../style/Portfolio.css';
import weatherApp from '../assets/weatherApp.jpeg';
import memoryGame from '../assets/memoryGame.jpeg';

function Portfolio() {
    return (
        <section className="protfolio" id="protfolio">
            <div className="heading">
                <h2 className="prot-head">Protfolio</h2>

                <div className="work-container">
                    <a href="https://talweather.netlify.app">
                        <span className="work-desc">Weather App</span>
                        <img src={weatherApp} alt="Weather App" className="work-img"></img>
                    </a>
                    <a href="https://tal-memory-game.netlify.app">
                        <span className="work-desc memory-desc">Memory Game</span>
                        <img src={memoryGame} alt="Memory Game" className="work-img memoryGame"></img>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;