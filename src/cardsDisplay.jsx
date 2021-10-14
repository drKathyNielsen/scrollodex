import React from 'react';
import './cardsDisplay.scss';
import KathysCard from './cards/kathysCard/kathysCard'

import ExampleCard from './cards/exampleCard/exampleCard';
//import DomCard from './Cards/DomCard';

function CardsDisplay() {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
        <ExampleCard />
      </div>

      <div>
        <KathysCard />
      </div>
    </div>
  );
}

export default CardsDisplay;
