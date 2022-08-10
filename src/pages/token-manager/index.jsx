import Summary from "../../components/tokenOverview-profileSummary";
import { MainContainer } from "../../themes/container";
import { ManagerMain } from "./styles";
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import Select from 'react-select'
import TokenManagerScripts from "../../components/TokenManagerScripts";
import TransactionHistory from "../transaction-history";
import TopHoldersHistory from "../holders-history";
import { ERC20_ABI } from "../../abis/constants"

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
    setUserAddress(user?.get("ethAddress"));
  }, [user])
  
  const [userAddress, setUserAddress] = useState("")
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
        setTokenTotalSupply(totalSupply);
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
      <Summary tokenAddress={token?.attributes?.address} totalSupply={tokenTotalSupply}/>
      <ManagerMain>
        {props.scripts && <h3 className="bold color-primary">Manager</h3>}
        {props.tokenHistory && <h3 className="bold color-primary">Transaction History</h3>}
        {props.topTokenHolders && <h3 className="bold color-primary">Top Holders</h3>}
        <Select options={userTokenList} onChange={selected}/>
        {props.scripts && <TokenManagerScripts token={token}/>}
        {props.tokenHistory && <TransactionHistory token={token} />}
        {props.topTokenHolders && <TopHoldersHistory token={token} totalSupply={tokenTotalSupply}/>}
      </ManagerMain>
    </MainContainer>
  );
};

export default TokenManager;
