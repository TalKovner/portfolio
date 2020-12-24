import React from 'react'
import '../style/Skills.css';
import Ball from './Ball';
import skills from '../assets/skillsData'



function toggleSkills(e) {
    const skillContainer = document.getElementById('skill-content');
    skillContainer.classList.toggle('add-height');
    Array.from(document.getElementsByClassName('skillFlex')).forEach(element => {
        element.classList.toggle('add-flex');
    });
    document.getElementById('arrow-down').classList.toggle('rotate')

    Array.from(document.getElementsByClassName('skillsHead')).forEach(element => element.classList.toggle('show'));
}

function Skills() {
    // const techSkillsData = skills.techSkills.map(skill => <Ball animationName="fadeInTopRight"><p>{skill}</p></Ball>)
    // const persSkillData = skills.personalSkills.map(skill => <Ball animationName="fadeInTopLeft"><p>{skill}</p></Ball>)
    const techSkillsData = skills.techSkills.map((skill, i) => <Ball key={i} animationName={`child${i}`}><p>{skill}</p></Ball>)
    const persSkillData = skills.personalSkills.map((skill, i) => <Ball key={i} animationName={`child${i}`}><p>{skill}</p></Ball>)
    return (
        <section className="skills" id="skills">
            <div className="heading" onClick={toggleSkills}>
                <span id="arrow-down" className="arrow-down"><i className="fas fa-caret-right"></i></span><h2>My Skills</h2>
            </div>
            <div className="content" id="skill-content">
                <div className="skillsBx">
                    <div className="techS">
                         <h3 className="skillsHead" >Technical Skills</h3>
                         <div className="skillFlex">{techSkillsData}</div>
                    </div> 
                    <div className="persS">
                        <h3 className="skillsHead">Personal Skills</h3>
                        <div className="skillFlex">{persSkillData}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
export { toggleSkills };