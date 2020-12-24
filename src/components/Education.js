import React from 'react';
import '../style/Education.css';

function Education() {
    return(
        <section className="education" id="education">
            <div className="heading">
                <h2>My Education</h2>
            </div>
            <div className="content">
                <div className="educationBx">
                <p>2019-2020: Full-Stack Development Course, Netcraft Academy.<br></br>
                    2013-2016: B.A Business Administration, Lev Academic Center.<br></br>
                    2010-2013: High school gratuated with Bagrut certificate.</p>
                </div>
            </div>
        </section>
    );
}

export default Education;