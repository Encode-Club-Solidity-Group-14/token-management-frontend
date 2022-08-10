import { TokenOverViewWrapper } from "./styles";
import { ethers, BigNumber } from "ethers";

const TokenOverview = ({ title, price, marketCap, totalSupply, holders, symbol }) => {
  const fromWei = (num) => {
    if(num ==="") return 0;
    return ethers.utils.formatEther(num)
  } 
  return (
    <TokenOverViewWrapper>
      <header>
        <h3 className="bold color-primary medium-font">{title}</h3>
      </header>
      <div className="overview-details">
        <p className="bold-medium">Price: {price}</p>
        <p className="bold-medium">Fully Diluted Market cap: {marketCap}</p>
        <p className="bold-medium">Total Supply: {fromWei(totalSupply)} {symbol}</p>
        <p className="bold-medium">Holders: {holders}</p>
      </div>
    </TokenOverViewWrapper>
  );
};

export default TokenOverview;
