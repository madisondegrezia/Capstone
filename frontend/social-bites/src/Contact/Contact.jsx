import NavBar from "../NavBar/NavBar";
import "./Contact.css";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import vitali from "./vitali.jpg";
import madison from "./madison.jpg";
import tong from "./tong.jpg";
import samr from "./samr.jpg";

export default function Contact() {
  return (
    <>
      <div className="contact-body">
        <div className="main">
          <div className="profile-card">
            <div className="img">
              <img src={madison} />
            </div>
            <div className="caption">
              <h3>Madison DeGrezia</h3>
              <p>Full-stack developer</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/madison-degrezia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/madisondegrezia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img src={tong} />
            </div>
            <div className="caption">
              <h3>Tong Lin</h3>
              <p>Full-stack developer</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/lin-tong-522a0523a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/tonglin2003"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img src={samr} />
            </div>
            <div className="caption">
              <h3>Samr Mouna</h3>
              <p>Full-stack developer</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/samrmouna"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/mousity"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          </div>
          <div className="profile-card">
            <div className="img">
              <img src={vitali} />
            </div>
            <div className="caption">
              <h3>Vitaliy Prymak</h3>
              <p>Front End Developer</p>
              <div className="social-links">
                <a
                  href="http://www.linkedin.com/in/vitaliy-prymak"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/VitaliPri"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
