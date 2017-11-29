import React, { Component } from 'react';
import './Social.css';


class Social extends Component {
  render() {
    return (
			<div className="Social">
				<ul>
						<a href="http://github.com/tangjames" target="_blank"><p>Github</p></a> / <a href="https://www.linkedin.com/in/tang-james/" target="_blank"><p>Linkedin</p></a> / <a href="mailto:tang.james91@gmail.com" target="_top"><p>Email</p></a>
				</ul>
      </div>
    );
  }
}

export default Social;
