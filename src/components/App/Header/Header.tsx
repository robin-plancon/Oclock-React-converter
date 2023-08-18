import './Header.scss';

import Toggler from '../Toggler/Toggler';

interface HeaderProps {
  baseAmount: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ baseAmount, isOpen, setIsOpen }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>

      <p className="header-amount">{baseAmount} euro</p>

      <Toggler isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
