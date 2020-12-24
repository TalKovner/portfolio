import React from 'react';
import '../style/Hobbies.css';
import hobbiesData from '../assets/hobbiesData';
import Hobbie from './Hobbie';

function Hobbies() {
    const hobbiesList = hobbiesData.map((hobbie, i) => <Hobbie key={i} className={hobbie.className} img={hobbie.img} alt={hobbie.name} name={hobbie.name}/>)
    return(
        <section className="hobbies" id="hobbies">
            <div className="heading">
                <h2>My Hobbies</h2>
            </div>
            <div className="hobbie">{hobbiesList}</div> 
        </section>
    );
}

export default Hobbies;