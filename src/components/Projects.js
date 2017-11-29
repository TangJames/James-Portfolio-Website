import React, { Component } from 'react';
import './Projects.css';


class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h2>Projects</h2>
        <p><a href="https://github.com/TangJames/Code-Scratch" target="_blank">Code Scratch</a></p>
				<p><a href="https://github.com/TangJames/goceries-app" target="_blank">GO-Ceries App</a></p>
        <p><a href="https://github.com/TangJames/SpideyFact-Reddit-Bot" target="_blank">SpideyFact Reddit Bot</a></p>
        <p><a href="https://github.com/TangJames/cards-against-humanity" target="_blank">Cards Against Humanity</a></p>
      </div>
    );
  }
}

export default Projects;
