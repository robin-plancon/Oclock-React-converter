import Header from './Header/Header';
import Currencies from './Currencies/Currencies';
import Footer from './Footer/Footer';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Currencies currencies={currencies} />
      <Footer />
    </div>
  );
}

export default App;
