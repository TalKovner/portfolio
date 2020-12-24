import React from 'react';
import '../style/Header.css';
import { toggleSkills } from './Skills'

function Header() {
    window.addEventListener('scroll', ()=> {
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    function toggleMenu() {
        const menuToggle = document.querySelector('.toggle');
        const menu = document.querySelector('.menu');
        
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    }

    return(
        <header>
            <a href="#home" className="logo">Portfolio</a>
            <div className="toggle" onClick={toggleMenu}></div>
            <ul className="menu">
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                <li><a href="#education" onClick={toggleMenu}>Education</a></li>
                <li><a href="#skills" onClick={() => toggleMenu() || toggleSkills()}>Skills</a></li>
                <li><a href="#protfolio" onClick={toggleMenu}>Portfolio</a></li>
                <li><a href="#hobbies" onClick={toggleMenu} >Hobbies</a></li>
                <li><a href="#lang" onClick={toggleMenu}>Languages</a></li>
            </ul>
        </header>
    );
}

export default Header