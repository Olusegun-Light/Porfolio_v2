import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1994-10-16");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className="about" id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
        <p>
          I am deeply passionate about writing clean and maintainable code,
          adhering to industry best practices. Continual improvement is a core
          value of mine, and I actively seek opportunities to enhance my skills
          and stay updated with the latest trends in the industry. My dedication
          to ongoing learning ensures that I can consistently provide innovative
          and efficient solutions for my clients.
        </p>

        <p>
          In addition to my technical expertise, I am a strong communicator and
          collaborator, able to work effectively with cross-functional teams and
          build positive relationships with clients. I am also highly adaptable
          and able to quickly learn new technologies and tools to meet the
          specific needs of each project.
        </p>
      </div>
    </div>
  );
}
export default About;
