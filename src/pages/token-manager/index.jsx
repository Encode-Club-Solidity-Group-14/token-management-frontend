import Summary from "../../components/tokenOverview-profileSummary";
import { MainContainer } from "../../themes/container";
import { ManagerMain } from "./styles";
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import Select from 'react-select'
import TokenManagerScripts from "../../components/TokenManagerScripts";
import TransactionHistory from "../transaction-history";
import TopHoldersHistory from "../holders-history";
import { isPausable} from '../../pages/token-generator/token-generator';
import { ERC20_ABI, ERC20_PAUSABLE_ABI  } from "../../abis/constants";
import { toast } from "react-toastify";

const TokenManager = (props) => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
    Moralis,
    provider,
  } = useMoralis()

  useEffect(() => {
    props.loadUserAddress()
  }, [user])
  
  const [pausable, setPausable] = useState({
    isPaused: false
  })
  const [token, setToken] = useState("")
  const [tokenTotalSupply, setTokenTotalSupply] = useState("")
  const [userTokenList, setUserTokenList] = useState([])

  useEffect(() => {
    if (user) {
      let listTokens = [];
      Moralis.Cloud.run("getERC20Tokens", {userAddress: user.attributes.ethAddress}).then((data)=> {
        if(data){
          data.map((token) => {
            listTokens.push({value: token, label: token.attributes.name});
            if(listTokens.length > 0){
              setUserTokenList(listTokens)
            }
         })
        }
      }).catch((error) => {
          console.error(error);
      })
    }
  }, [user])

  useEffect(() => {
    const tokenAddress = token?.attributes?.address;
    if(tokenAddress){
      const fetchData = async () => {
        await Moralis.enableWeb3();
        const sendOptions = {
          contractAddress: token?.attributes?.address,
          functionName: "totalSupply",
          abi: ERC20_ABI
        }
        const totalSupply = await Moralis.executeFunction(sendOptions);
        setTokenTotalSupply(totalSupply.toString());
        if(isPausable(token.attributes.type)){
          const contractAddress = token?.attributes?.address;
          const sendOptions = {
            contractAddress: contractAddress,
            functionName: "paused",
            abi: ERC20_PAUSABLE_ABI,
            params: {
              account: contractAddress
            },
          }
          const isPaused = await Moralis.executeFunction(sendOptions)  
          .catch(
            (error) => {toast.error(error.message)}
          );
          setPausable({ ...pausable, ["isPaused"]: isPaused })
        }
      }
      fetchData().catch((error) => {
        console.error(error)
      })
    }

  }, [token])

  const selected = (e) => {
    console.log(e.value)
    setToken(e.value)
  }

  return (
      <MainContainer>
      <Summary token={token} totalSupply={tokenTotalSupply}/>
      <ManagerMain>
        {props.scripts && <h3 className="bold color-primary">Manager</h3>}
        {props.tokenHistory && <h3 className="bold color-primary">Transaction History</h3>}
        {props.topTokenHolders && <h3 className="bold color-primary">Top Holders</h3>}
        <Select options={userTokenList} onChange={selected}/>
        {props.scripts && <TokenManagerScripts token={token} isPaused={pausable.isPaused} setPausable={setPausable} setTokenTotalSupply={setTokenTotalSupply}/>}
        {props.tokenHistory && <TransactionHistory token={token} />}
        {props.topTokenHolders && <TopHoldersHistory token={token} totalSupply={tokenTotalSupply}/>}
      </ManagerMain>
    </MainContainer>
  );
};

export default TokenManager;
