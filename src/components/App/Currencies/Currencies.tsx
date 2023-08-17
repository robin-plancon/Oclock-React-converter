import './Currencies.scss';

interface Currency {
  description: string;
  code: string;
  rate: number;
}

interface CurrenciesProps {
  currencies: Currency[];
}

function Currencies({ currencies }: CurrenciesProps) {
  const currenciesList = currencies.map((currency) => (
    <li key={currency.code} className="currencies__item">
      <p className="currencies__description">{currency.description}</p>
    </li>
  ));

  return (
    <div className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">{currenciesList}</ul>
    </div>
  );
}

export default Currencies;
