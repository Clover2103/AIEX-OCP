import React from 'react';
import "./AllyCard.css";

const AllyCard = ({ src, alt, url, desc }) => (
  <div className="cont-inf-allies">
    <figure>
      <img src={src} alt={alt} />
      <div className="allies_info"> 
        <p>
          {desc}
        </p>
        <a href={url}><button className='btn-allies'>CONOCER MÁS</button></a>
      </div>
    </figure>
  </div>
);

export { AllyCard }