import Wrapper from "../sections/Wrapper";
import pic from "../assets/pc.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
	return (
		<div className="profile">
			<img src={pic} alt="avatarImage" className="profile-image" />
			<h1 className="profile-text">
				Hi i am <span>Pruthviraj</span> Chudasama{" "}
			</h1>
			<h2 className="profile-text">The creator of this awesome WebApp.</h2>
			<h3 className="profile-tex">
				This project is created for showcase a modern web application using{" "}
				<span>TypeScript</span>, <span>React</span>, <span>Redux</span>, and{" "}
				<span>SCSS</span>, with seamless <span>API calling</span> and{" "}
				<span>routing</span> functionalities, resulting in a smooth and
				responsive User Experience.
			</h3>
			<div className="profile-links">
				<a href="https://github.com" target="_blank">
					<FaGithub />
				</a>
				<a href="https://in.linkedin.com/" target="_blank">
					<FaLinkedin />
				</a>
				<a href="https://www.twitter.com" target="_blank">
					<FaTwitter />
				</a>
				<a href="https://www.instagram.com" target="_blank">
					<FaInstagram />
				</a>
			</div>
		</div>
	);
};

export default Wrapper(About);
