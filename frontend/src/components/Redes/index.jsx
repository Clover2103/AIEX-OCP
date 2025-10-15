import React from "./Redes.css";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./Redes.css";

const RedesFlotantes = () => {
    return (
    <div className="redes-flotantes">
        <div className="re-cont-flotantes">

            <div className="row con-re-float" title="Facebook">
                <a href="https://www.facebook.com/people/AIEX-SAS/100063556121959/" target="_blank" className="cl-p" >
                    <FaFacebook />
                </a>
            </div>

            <div className="row con-re-float" title="Tik Tok">
                <a href="https://www.instagram.com/aiexsas/" target="_blank" className="cl-p">
                    <FaInstagram className="redes-icon"/>
                </a>
            </div>

            <div className="row con-re-float" title="WhatsApp">
                <a href="https://api.whatsapp.com/send?phone=573165294689" target="_blank" className="cl-p">
                    <FaWhatsapp className="redes-icon"/>
                </a>
            </div>
        </div>
    </div>
    );
};

export { RedesFlotantes };

