import Header from './Header/Header';
import Currencies from './Currencies/Currencies';
import Result from './Result/Result';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  const currentCurrency = {
    description: 'Romanian Leu',
    code: 'RON',
    rate: 4.95366,
  };

  return (
    <div className="App">
      <Header baseAmount={1} />
      <Currencies currencies={currencies} />
      <Result currency={currentCurrency} />
    </div>
  );
}

export default App;
