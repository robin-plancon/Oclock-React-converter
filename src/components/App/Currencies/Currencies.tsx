import React from 'react';

import { Currency } from '../../../@types';

import './Currencies.scss';

interface CurrenciesProps {
  currencies: Currency[];
}

function Currencies({ currencies }: CurrenciesProps) {
  const currenciesList = currencies.map((currency) => (
    <li key={currency.code} className="currency">
      {currency.description}
    </li>
  ));

  return (
    <div className="currencies">
      <h2 className="currencies-title">Currencies</h2>
      <ul className="currencies-list">{currenciesList}</ul>
    </div>
  );
}

export default Currencies;
