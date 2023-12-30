/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Power BI Health Care Study Case 🎉",
    description:
      "A Power BI Analytical Case of a Hospital & And multiple other Case studies with all the dashboard show casing detailed analysis.",
    url: "#",
  },
  {
    title: "Temperature & Humidity Detection with Arduino 🤖 ",
    description:
      "Creating a circuit with a baseline temperature of 20 C. Temperature and Humidity Sensor",
    url: "https://github.com/SarahSidAhmed/Temperature-Humidity-Sensor.git",
  },
  {
    title: "NVIDIA Deep Learning & Machine Learnig fundamentals 📗",
    description:
      "An introduction to Deep Learning basics and Machine Learning fundemantals with NVIDIA Module.",
    url: "https://github.com/SarahSidAhmed/NVIDIA_Creating-an-ML-Model.git",
  },
  {
    title: "Netflix Movie Application UI UPGRADE 📲",
    description:
      "Upgrading the UI UX of Netflix Movies Oriented App with Android Studio",
    url: "https://github.com/SarahSidAhmed/NetflixMoviesApp.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
