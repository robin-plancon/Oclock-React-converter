import './Result.scss';

interface ResultProps {
  currency: {
    description: string;
    rate: number;
  };
}

function Result({ currency }: ResultProps) {
  return (
    <div className="result">
      <span className="result-value">{currency.rate.toFixed(2)}</span>
      <span className="result-currency">{currency.description}</span>
    </div>
  );
}

export default Result;
