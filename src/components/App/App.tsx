import Header from './Header/Header';
import Currencies from './Currencies/Currencies';
import Result from './Result/Result';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header baseAmount={1} />
      <Currencies currencies={currencies} />
      <Result />
    </div>
  );
}

export default App;
