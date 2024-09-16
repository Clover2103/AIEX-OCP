import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import './ScopesProcesses.css';

const ScopesProcesses = () => {
  return (
    <div className="scopes-processes-body w-100">
      <div className="scopes-processes-descrip w-100">
        <div className="scopes-processes-container w-100">
          <div className="row g-3 scopes-processes-content">
            <div className="scopes-processes col-md-4">
              <Link to="/scopes-rules">
                <div className='processes-icon-cont'>
                  <FaRegPaperPlane className='processes-icon'/>
                </div>
                <button>Reglas</button>
              </Link>
            </div>

            <div className="scopes-processes col-md-4">
              <Link to="/scopes-r-and-d">
                <div className='processes-icon-cont'>
                  <FaRegMap className='processes-icon'/>
                </div>
                <button>Derechos y deberes</button>
              </Link>
            </div>

            <div className="scopes-processes col-md-4">
              <Link to="/scopes-f-a">
                <div className='processes-icon-cont'>
                  <FaRegLightbulb className='processes-icon'/>
                </div>
                <button>Enfoque funcional</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export { ScopesProcesses };