import React from "react";
import "../style/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="heading">
        <h2>About Me</h2>
      </div>
      <div className="content">
        <div className="contentBx">
          <h3>I'm a Front End Developer.</h3>
          <p>
            {" "}
            Leveraging expertise in React and web technologies, I design and
            build user-centric web applications. Passionate about continuous
            learning and staying ahead of the curve through exploring new tools
            and technologies. I am committed to self-improvement through ongoing
            education, online courses, and practical coding challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
