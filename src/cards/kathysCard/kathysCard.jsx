import React from 'react';
import './kathysCard.scss';
import image from './rocky-mountains-clipart-6.jpg';

//

function KathysCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="example headshot of a woman" />
        </div>

        <div className="card">
            <h3>Kathy Nielsen</h3>
            <p>Technical Coach </p>
            <p></p>
            <p></p>
      </div>

    </div>
  );
}

export default KathysCard;
