import { Currency } from '../../../@types';
import './Result.scss';

interface ResultProps {
  currency: Currency | null;
  total: number;
}

function Result({ currency, total }: ResultProps) {
  return (
    <div className="result">
      <span className="result-value">{total.toFixed(2)}</span>
      <span className="result-currency">
        {currency ? currency.description : '_'}
      </span>
    </div>
  );
}

export default Result;
