import { TokenOverViewWrapper } from "./styles";

const TokenOverview = ({ title, price, marketCap, totalSupply, holders }) => {
  return (
    <TokenOverViewWrapper>
      <header>
        <h3 className="bold color-primary medium-font">{title}</h3>
      </header>
      <div className="overview-details">
        <p className="bold-medium">Price: {price}</p>
        <p className="bold-medium">Fully Diluted Market cap: {marketCap}</p>
        <p className="bold-medium">Total Supply: {Number(totalSupply)}</p>
        <p className="bold-medium">Holders: {holders}</p>
      </div>
    </TokenOverViewWrapper>
  );
};

export default TokenOverview;
