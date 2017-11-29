import React, { Component } from 'react';
import './Bio.css';


class Bio extends Component {
  render() {
    return (
      <div className="Bio">
        <h2>A bit about me</h2>
        <p>{"I've been around technology my whole life. As a Systems Administrator turned Programmer, I've fallen in love with coding. Focusing on backend, I'd like to say I'm involved with the entire web devlopement lifecycle."}</p>

        <p>I strive for clean and concicse code but not averse to getting the job done quick. My development skills include <b>HTML5, CSS3, JavaScript5/ES6, Python, AJAX/JSON, Bootstrap, SASS, jQuery, Node.JS, Express.JS, React.JS, React Native, MongoDB, Firebase, Oauth, noSQL, SQL, and Github.</b> This website was built in React!</p>

        <p>{"On a more personal front, I love to build computers, an avid gamer since I was a young lad, and a huge poker enthusiast. I'm very much a people person and love conversing and learning about everybody's walks of life. Always hungry to learn more about all types of technology!"}</p>

      </div>
    );
  }
}

export default Bio;
