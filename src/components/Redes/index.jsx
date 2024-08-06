import React from "./Redes.css";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Redes.css";

const RedesFlotantes = () => {
    return (
    <div className="redes-flotantes">
        <div className="re-cont-flotantes">
            <div className="row con-re-float" title="Instagram">
                <a href="#" className="cl-p">
                    <FaTiktok />
                </a>
            </div>

            <div className="row con-re-float" title="Facebook">
                <a href="#" className="cl-p" >
                    <FaFacebook />
                </a>
            </div>

            <div className="row con-re-float" title="Tik Tok">
                <a href="#" className="cl-p">
                    <FaInstagram className="redes-icon"/>
                </a>
            </div>
        </div>
    </div>
    );
};

export { RedesFlotantes };

