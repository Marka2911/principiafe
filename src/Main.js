import Header from './Header';
import Footer from './Footer';
import quisomimg from './img/qui_som_img.png';
import projectesimg1 from './img/projectes_1.png';
import projectesimg2 from './img/projectes_2.png';
import contact from './img/contact.png';
import entitats from './img/entitats.png';
import equip_impulsor from './img/equip_impulsor.png';
import nostres_valors from './img/nostres_valors.png';
import trajectoria from './img/trajectoria.png';
import './Main.css';
import {
    MdEmail
} from "react-icons/md";

import {
    FaInstagram,
    FaTiktok,
    FaXTwitter,
    FaYoutube
} from "react-icons/fa6";

function Main() {
    return (<div>
        <Header />
        <div className="main-container">
            <div className="slogan-container">
                <h1>PRINCIPIA</h1>
                <h2>donant veu a allò que tothom sent</h2>
                <h4 className="slogan-text">Aspirem a ser un grup d’interès que dona veu a la ciutadania, un projecte col·laboratiu que recull veus i experiències del territori, combinant recerca i participació per impulsar l’emancipació social.</h4>
            </div>
            <div className="regular-container">
                <div className="regular-left-container">
                    <div className="regular-section-title">
                        <h3>Qui som?</h3>
                        <p>A Principia som una cooperativa de base transformadora que treballa per democratitzar les institucions públiques i
                            fer-les més responsables, accessibles i coherents amb els valors que haurien de defensar: justícia social,
                            transparència, inclusió, sostenibilitat, compromís comunitari…</p>
                    </div>

                    <button className="regular-button">Llegir més</button>
                </div>
                <div className="regular-right-container">
                    <div className="regular-section-img">
                        <img src={quisomimg} alt="Qui som?" width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div className="regular-container">
                <div className="regular-left-container">
                    <div className="regular-section-title">
                        <h3>Projectes</h3>
                        <p>Creem projectes amb una doble finalitat: en primera instància, per pressionar el sector públic perquè actuï d’acord
                            amb els valors i necessitats que defensem; i en segona instància, per fomentar nosaltres mateixos allò que el sector
                            públic no arriba a cobrir.
                        </p>
                        <p>

                            És per aquest motiu que hem creat el nostre primer projecte, Demarquia, i actualment estem elaborant un segon,
                            Curia Qualitas.
                        </p>

                    </div>

                    <button className="regular-button">Llegir més</button>
                </div>
                <div className="regular-right-container-2">
                    <div className="regular-section-img-2">
                        <img src={projectesimg1} alt="Projectes" width="75%" height="100%" />
                        <img src={projectesimg2} alt="Projectes" width="75%" height="100%" />

                    </div>
                </div>
            </div>
            <div className="regular-container">
                <div className="regular-left-container">
                    <div className="regular-section-title">
                        <h3>Els nostres valors</h3>
                        <p>Ens definim a partir de set grans conceptes que interpretem com els fonaments dels nostres valors:
                        </p>
                        <ol>
                            <li>Els valors de l’escola, com a base educativa i ètica.</li>

                            <li>
                                Els Objectius de Desenvolupament Sostenible (ODS) i els Drets Humans,
                                com a marc universal de justícia i equitat.
                            </li>

                            <li>
                                L’Economia Social i Solidària, com a model de producció i relació econòmica.
                            </li>

                            <li>
                                El Municipalisme, com a expressió de sobirania local i democràcia de proximitat.
                            </li>

                            <li>
                                La ideologia pròpia de la cooperativa, que integra conceptes essencials
                                no recollits directament pels altres principis.
                            </li>

                            <li>
                                L’Agricultura i el sector primari, com a pilar de sostenibilitat
                                i arrelament territorial.
                            </li>

                            <li>
                                La lògica cooperativista, com a estructura organitzativa i cultural
                                que guia totes les nostres accions.
                            </li>
                        </ol>
                    </div>

                    <button className="regular-button">Llegir més</button>
                </div>
                <div className="regular-right-container">
                    <div className="regular-section-img">
                        <img src={nostres_valors} alt="Els nostres valors" width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div className="regular-container">
                <div className="regular-left-container">
                    <div className="regular-section-title">
                        <h3>Trajectòria</h3>
                        <p>El projecte va néixer a les aules de batxillerat, fruit d’un treball de recerca i del desig d’impacte real. El que va començar com una iniciativa individual s’ha convertit en un col·lectiu de joves compromesos amb la transformació social. Treballem per pressionar el sector públic perquè sigui coherent amb els seus valors i assumeixi les seves responsabilitats. Alhora, oferim solucions concretes per democratitzar les institucions i garantir els drets fonamentals. Si el sector públic no actua, estem preparats per assumir nosaltres mateixos les tasques que calen per construir un model més just i participatiu.</p>
                    </div>

                    <button className="regular-button">Llegir més</button>
                </div>
                <div className="regular-right-container">
                    <div className="regular-section-img">
                        <img src={trajectoria} alt="Trajectòria" width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div className="regular-container">
                <div className="regular-left-container">
                    <div className="regular-section-title">
                        <h3>Equip impulsor</h3>
                        <p>L’Equip Impulsor està format per les persones que han donat forma, direcció i coherència al projecte des del seu origen. Som un grup de joves que combinem coneixement jurídic, tecnològic, organitzatiu i social per construir eines que democratitzin el poder i ampliïn la capacitat d’acció ciutadana. Ens organitzem de manera cooperativa, amb rols flexibles però definits, i amb una estructura que garanteix que cada decisió tingui un responsable i cada responsable tingui un espai de suport.</p>
                        <p>
                            Cada membre forma part de l’organització per una raó profunda i personal: perquè ha viscut una mancança del sistema, perquè creu en la democràcia directa com a eina de transformació, perquè vol construir estructures més justes o perquè ha trobat en Principia un espai on convertir idees en projectes reals. Som aquí perquè compartim una mateixa convicció: si el món no és com hauria de ser, tenim la responsabilitat de construir-lo nosaltres mateixos.
                        </p>
                    </div>

                    <button className="regular-button">Llegir més</button>
                </div>
                <div className="regular-right-container">
                    <div className="regular-section-img">
                        <img src={equip_impulsor} alt="Equip impulsor" width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div className="regular-container">
                <div className="regular-left-container">
                    <div className="regular-section-title">
                        <h3>Entitats col.laboradores</h3>
                        <p>Al llarg del nostre procés de creixement ens hem adonat que no només hi havia persones disposades a ajudar-nos i a impulsar models com el nostre, sinó que també una pluralitat d’entitats ha decidit donar-nos suport de manera continuada. El pas d’una idea inicial a un projecte real i operatiu no hauria estat possible, per molt que ho haguéssim intentat, sense aquestes organitzacions que des del primer moment han confiat en un grup de joves amb determinació i visió. El seu acompanyament ha estat clau per validar el nostre model, ampliar les nostres capacitats i consolidar la nostra estructura. Gràcies a elles, el que era un esbós de futur s’ha convertit en una realitat en construcció.</p>
                    </div>

                    <button className="regular-button">Llegir més</button>
                </div>
                <div className="regular-right-container">
                    <div className="regular-section-img">
                        <img src={entitats} alt="Entitats col·laboradores" width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div className="regular-container">
                <div className="regular-left-container">
                    <div className="regular-section-title">
                        <h3>Contacte</h3>
                        <p>Si vols col·laborar, participar en projectes o consultar l'arxiu, contacta'ns via correu electrònic o a les nostres xarxes socials.</p>
                        <ul className="contact-list">

                            <li>
                                <MdEmail />
                                <span>Email: principiacoop@gmail.com</span>
                            </li>

                            <li>
                                <FaInstagram />
                                <span>Instagram: cooprincipia</span>
                            </li>

                            <li>
                                <FaTiktok />
                                <span>TikTok: cooprincipia</span>
                            </li>

                            <li>
                                <FaXTwitter />
                                <span>X: cooprincipia</span>
                            </li>

                            <li>
                                <FaYoutube />
                                <span>YouTube: cooprincipia</span>
                            </li>

                        </ul>
                    </div>

                    <button className="regular-button">Llegir més</button>
                </div>
                <div className="regular-right-container">
                    <div className="regular-section-img">
                        <img src={contact} alt="Contacte" width="100%" height="100%" />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>);
}

export default Main;