import Summary from "../../components/tokenOverview-profileSummary";
import { MainContainer } from "../../themes/container";
import { ManagerMain } from "./styles";
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import Select from 'react-select'
import TokenManagerScripts from "../../components/TokenManagerScripts";

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
  const [tokenAddress, setTokenAddress] = useState("")
  const [userTokenList, setUserTokenList] = useState([])

  useEffect(() => {
    if (user) {
      let listTokens = [];
      Moralis.Cloud.run("getERC20Tokens", {userAddress: user.attributes.ethAddress}).then((data)=> {
        if(data){
          data.map((token) => {
            listTokens.push({value: token.attributes.address, label: token.attributes.name});
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

  const selected = (e) => {
    console.log(e.value)
    setTokenAddress(e.value)
  }

  return (
      <MainContainer>
      <Summary />
      <ManagerMain>
        <h3 className="bold color-primary">Token Manager - {tokenAddress}</h3>
        <Select options={userTokenList} onChange={selected}/>
        <TokenManagerScripts tokenAddress={tokenAddress}/>
      </ManagerMain>
    </MainContainer>
  );
};

export default TokenManager;
