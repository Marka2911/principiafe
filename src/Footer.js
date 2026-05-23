import './Footer.css';
import logo from './img/logo_principia.png';
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-logo-slogan">

                    <img src={logo} alt="Logo Principia" height="150" />
                    <div className="footer-slogan">
                        <h5>PRINCIPIA</h5>
                        <p> donant veu a allò que tothom sent </p>
                    </div>
                </div>

                <div className="footer-links">
                    <p className="footer-title"> Enllaços</p>
                    <p> Qui som?</p>
                    <p> Projectes</p>
                    <p> Els nostres valors</p>
                    <p> Trajectòria</p>
                </div>
                <div className="footer-links">
                    <p className="footer-title"> Contacte</p>
                    <p> principia.coop@gmail.com</p>
                    <div className="footer-social-media">
                        <MdEmail className="footer-icon" />
                        <FaInstagram className="footer-icon" />
                        <FaTiktok className="footer-icon" />
                        <FaXTwitter className="footer-icon" />
                        <FaYoutube className="footer-icon" />
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>© 2026 Principia. Tots els drets reservats.</p>
            </div>
        </div>
    );
}

export default Footer;