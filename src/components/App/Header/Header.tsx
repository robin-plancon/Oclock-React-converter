import './Header.scss';

import Toggler from '../Toggler/Toggler';

interface HeaderProps {
  baseAmount: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBaseAmount: React.Dispatch<React.SetStateAction<number>>;
}

function Header({ baseAmount, isOpen, setIsOpen, setBaseAmount }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>

      <p className="header-amount">
        <input
          type="number"
          className="header-amount__input"
          min={0}
          value={baseAmount}
          onChange={(event) => {
            setBaseAmount(Number(event.target.value));
          }}
        />{' '}
        euro
      </p>

      <Toggler isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
