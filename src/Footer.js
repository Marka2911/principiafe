import './Footer.css';
import logo from './img/logo_principia.png';
function Footer() {
    return ( <div className="footer-container">
            <div className="footer-logo-slogan">
                
                <img src={logo} alt="Logo Principia" />
                <div className="footer-slogan">
                    <h5>PRINCIPIA</h5>
                    <p> donant veu a allò que tothom sent </p>
                </div>
            </div>
    </div> );
}

export default Footer;