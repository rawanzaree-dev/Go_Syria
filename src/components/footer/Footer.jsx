import { languages } from "../../data";
import { currencies } from "../../data";
import "./footer.css";
import SelectBox from "./SelectBox";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="col">
          <SelectBox arr={languages} label="Languages" />
          <SelectBox arr={currencies} label="Currencies" />
        </div>
        <div className="col">
          <h3>Support</h3>
          <ul>
            <li>Contact</li>
            <li>Legal Notice</li>
            <li>Privacy Policy</li>
            <li>General Teams</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Gift Cards</li>
            <li>Magazine</li>
            <li>Travel Guides</li>
          </ul>
        </div>
        <div className="col">
          <h3>Work With Us</h3>
          <ul>
            <li>Become a Supplier</li>
            <li>Become an Affiliate Partner</li>
          </ul>
          <div className="icons">
            <div className="icon">
              <i className="bi bi-instagram" style={{ color: "#E4405F" }}></i>
            </div>
            <div className="icon">
              <i className="bi bi-facebook" style={{ color: "#1877F2" }}></i>
            </div>
            <div className="icon">
              <i className="bi bi-twitter-x"></i>
            </div>
            <div className="icon">
              <i className="bi bi-linkedin" style={{ color: "#0A66C2" }}></i>
            </div>
          </div>
          <p className="copyright">Copyright &copy; 2026 Go Syria</p>
        </div>
      </div>
    </footer>
  );
}
