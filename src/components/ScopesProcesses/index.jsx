import React from 'react';
import './ScopesProcesses.css';
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";

const ScopesProcesses = () => {
  return (
    <div className="scopes-processes-body w-100">
      <div className="scopes-processes-descrip w-100">
        <div className="scopes-processes-container w-100">
          <div className="row g-3 scopes-processes-content">
            <div className="scopes-processes col-md-4">
              <div className='processes-icon-cont'>
                <FaRegPaperPlane className='processes-icon'/>
              </div>
              <a href="#">
                <button>Reglas</button>
              </a>
            </div>

            <div className="scopes-processes col-md-4">
              <div className='processes-icon-cont'>
                <FaRegMap className='processes-icon'/>
              </div>
              <a href="#">
                <button>Derechos y deberes</button>
              </a>
            </div>

            <div className="scopes-processes col-md-4">
              <div className='processes-icon-cont'>
                <FaRegLightbulb className='processes-icon'/>
              </div>
              <a href="#">
                <button>Enfoque funcional</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export { ScopesProcesses };