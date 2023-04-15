import React from "react";
import Wrapper from "../sections/Wrapper";
import pic from "../assets/pc.png";

const About = () => {
	return (
		<div className="about">
			<img src={pic} alt="avatarImage" />
      <h1 className="profile-text">Hi i am Pruthviraj Chudasama</h1>
      <h2 className="profile-text">The creator of this awesome WebApp !!!</h2>
      <h4 className="profile-tex">
        this project is created for showcase a modern web application using TypeScript, React, Redux, and SCSS, with seamless API calling and routing functionalities, resulting in a smooth and responsive user experience.
      </h4>
		</div>
	);
};

export default Wrapper(About);
