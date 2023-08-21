import { useEffect, useState } from 'react';

import Header from './Header/Header';
import Currencies from './Currencies/Currencies';
import Result from './Result/Result';

// import currencies from '../../data/currencies';

import { Currency } from '../../@types';

import './App.scss';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [baseAmount, setBaseAmount] = useState(10);

  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [currentCurrency, setCurrentCurrency] = useState<Currency | null>(null);

  const [total, setTotal] = useState(0);

  /* 
    exchangerate API call to retrieve currencies List.
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.exchangerate.host/symbols');
        const data = await response.json();

        const symbols: Currency[] = Object.values(data.symbols);

        console.log(symbols[0]);

        setCurrencies(symbols);
        setCurrentCurrency(symbols[0]);
      } catch (err) {
        // console.error(err);
      }
    };

    fetchData();
  }, []);

  /* 
    exchangerate API call to retrieve currencies rates.
  */
  useEffect(() => {
    async function fetchTotal() {
      if (!currentCurrency) {
        return;
      }
      try {
        const response = await fetch(
          `https://api.exchangerate.host/convert?from=EUR&to=${currentCurrency.code}&amount=${baseAmount}`
        );
        const data = await response.json();

        setTotal(data.result);
      } catch (err) {
        // console.error(err);
      }
    }

    fetchTotal();
  }, [baseAmount, currentCurrency]);

  return (
    <div className="App">
      <Header
        baseAmount={baseAmount}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setBaseAmount={setBaseAmount}
      />

      {/* {isOpen ? <Currencies currencies={currencies} /> : false} */}
      {isOpen && (
        <Currencies
          currencies={currencies}
          setCurrentCurrency={setCurrentCurrency}
        />
      )}

      <Result currency={currentCurrency} total={total} />
    </div>
  );
}

export default App;
