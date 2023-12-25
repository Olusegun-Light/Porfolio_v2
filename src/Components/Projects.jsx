import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "Tourism APi",
      desc: "Centered around tourism, this API facilitates tour booking for users. It boasts a variety of capabilities including tour listings, tour search functionality, user authentication, reviews, and a host of other features.",
      // liveLink: "website url",
      githubLink: "https://github.com/Olusegun-Light/Tourisim-API",
      techs: ["Javascript", "Nodejs", "Mongodb"],
      isOpenSource: true,
    },
    {
      name: "Natours",
      desc: "Natours – your go-to web app, perfectly synced with the Tourism API. Dive into exciting adventures, manage them effortlessly, and connect with like-minded explorers.",
      liveLink: "website url",
      githubLink: "https://github.com/Olusegun-Light/Natours",
      techs: ["Javascript", "PUG", "CSS", "Nodejs", "Mongodb"],
      isOpenSource: true,
    },
    {
      name: "Wiki-APi",
      desc: "The Wiki API is designed to manage a collection of articles in a simple and efficient manner. It provides a set of endpoints to perform various operations, including retrieving all articles, adding new articles, updating existing ones, and deleting articles.",
      liveLink: "website url",
      githubLink: "https://github.com/Olusegun-Light/Wiki-Api",
      techs: ["Javascript", "EJS", "Nodejs", "Mongodb"],
      isOpenSource: true,
    },
  ];
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
