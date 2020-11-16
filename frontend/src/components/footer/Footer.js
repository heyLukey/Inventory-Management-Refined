// Npm libaries
import React from "react";

// CSS
import "./footer.css";

// Website footer that always renders
const Footer = () => {
  // Get current year
  const thisYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="my-footer">
        <div className="footer-grid">
          {/* WEBSITE INFO */}
          <div className="my-info">Copyright &#169; 2020-{thisYear}</div>
          <div className="divider">|</div>
          <div className="designed-by">Created by Lucas Loudon</div>
          {/* SOCIAL MEDIA LINKS */}
          <div className="my-socials">
            <a
              className="github"
              href="https://github.com/heyLukey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="email"
              href="mailto: lucasloudon@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              className="twitter"
              href="https://twitter.com/hey_Lukey_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="facebook"
              href="https://www.facebook.com/profile.php?id=100013419851027"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
