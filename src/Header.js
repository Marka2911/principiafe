import './Header.css';
import logo from './img/logo_principia.png';
import { MdLanguage } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Header() {
    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-left-container">
                    <div className="logo-title-container">
                        <img src={logo} alt="Principia Logo" />
                        <h1>Principia</h1>
                    </div>
                    <p>Qui som?</p>
                    <p>Projectes</p>
                    <p>Els nostres valors</p>
                    <p>Trajectòria</p>
                    <p>Equip impulsor</p>
                    <p>Entitats col·laboradores</p>
                    <p>Contacte</p>
                </div>
                <div className="header-right-container">
                    <div className="compte-container">
                        <div className="section-title">
                            <FaUserCircle className="icon" />
                            <p>Compte</p>
                        </div>

                        <div className="account-buttons">
                            <button>Inicia sessió</button>
                            <button className="register-btn">Registra't</button>
                        </div>
                    </div>

                    <div className="language-container">
                        <div className="section-title">
                            <MdLanguage />
                            <p>Idioma</p>
                        </div>

                        <button>CAT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;