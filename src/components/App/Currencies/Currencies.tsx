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

  const handleClick = (clickedCurrency: Currency) => {
    setCurrentCurrency(clickedCurrency);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLLIElement>,
    clickedCurrency: Currency
  ) => {
    if (event.key === 'Enter') {
      handleClick(clickedCurrency);
    }
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
    <li key={currency.code} className="currency">
      {/* { eslint-disable-next-line jsx-a11y/interactive-supports-focus} */}
      <div
        onClick={() => {
          handleClick(currency);
        }}
        onKeyPress={(event) => {
          handleKeyPress(event, currency);
        }}
        role="button"
        tabIndex={0}
      >
        {currency.description}
      </div>
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
