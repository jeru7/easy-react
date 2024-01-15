import "./layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/jeru7/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/jeru7" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
      </div>
      <div className="footer-name">
        Developed by: <em>jeru7</em>
      </div>
    </footer>
  );
};

export default Footer;
