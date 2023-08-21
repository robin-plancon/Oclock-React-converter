import { useState } from 'react';

import { Currency } from '../../@types';
import Header from './Header/Header';
import Currencies from './Currencies/Currencies';
import Result from './Result/Result';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentCurrency, setCurrentCurrency] = useState<Currency>(
    currencies[16]
  );
  const [baseAmount, setBaseAmount] = useState(10);

  const makeConversion = () => {
    return baseAmount * currentCurrency.rate;
  };

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

      <Result currency={currentCurrency} total={makeConversion()} />
    </div>
  );
}

export default App;
