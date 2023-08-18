import './Header.scss';

interface HeaderProps {
  baseAmount: number;
}

function Header({ baseAmount }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>

      <p className="header-amount">{baseAmount} euro</p>
    </header>
  );
}

export default Header;
