import React from 'react';

import { Currency } from '../../../@types';

import './Currencies.scss';

interface CurrenciesProps {
  currencies: Currency[];
  setCurrentCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

function Currencies({ currencies, setCurrentCurrency }: CurrenciesProps) {
  const [search, setSearch] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // j'affiche mon intention
    // console.log(
    //   'je veux modifier la valeur de mon état avec la saisie utilisateur'
    // );

    setSearch(event.target.value);
  };

  const filteredList = currencies.filter((currency) => {
    if (!search.trim().length) {
      return true;
    }

    return currency.description
      .toLowerCase()
      .includes(search.trim().toLowerCase());
  });

  const currenciesList = filteredList.map((currency) => (
    <li
      key={currency.code}
      className="currency"
      onClick={() => {
        setCurrentCurrency(currency);
      }}
    >
      {currency.description}
    </li>
  ));

  return (
    <div className="currencies">
      <h2 className="currencies-title">Currencies</h2>
      <input
        type="search"
        className="currencies-search"
        placeholder="Search a currency..."
        aria-label="Search a currency"
        value={search}
        onChange={handleChange}
      />
      <ul className="currencies-list">{currenciesList}</ul>
    </div>
  );
}

export default Currencies;
