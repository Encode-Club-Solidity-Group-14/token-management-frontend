import Summary from '../../components/tokenOverview-profileSummary'
import { MainContainer } from '../../themes/container'
import logo from "../../assets/alien-love-emoji-animation.gif";
import LoadingSpinner from "../../components/LoadingSpinner/index";
import { useMoralis } from 'react-moralis'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import Button from '../../components/ButtonComponent/Button'
import { ERC20_AIRDROP_ABI } from '../../abis/constants'
import { toast } from "react-toastify";
import {createProof} from "../../components/TokenManagerScripts/utils/merkleTreeUtils";

const Claim = (props) => {
  const {user,Moralis} = useMoralis()
  useEffect(() => {
    props.loadUserAddress()
  }, [user])

  const [token, setToken] = useState('')
  const [userTokenList, setUserTokenList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user) {
      let listTokens = []
      Moralis.Cloud.run('getERC20AirDropTokens')
        .then((data) => {
          if (data) {
            data.map((token) => {
              listTokens.push({ value: token, label: token.attributes.name })
              if (listTokens.length > 0) {
                setUserTokenList(listTokens)
              }
            })
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [user])

  const selected = (e) => {
    console.log(e.value)
    setToken(e.value)
  }

  const claim = async () => {
    setIsLoading(true)
    const proof = createProof(token?.attributes?.airDropAddresses, user?.get("ethAddress"));
    await Moralis.enableWeb3();
    const sendOptions = {
      contractAddress: token?.attributes?.address,
      functionName: "claim",
      abi: ERC20_AIRDROP_ABI,
      params: {
        proof_: proof
      },
    }
    const transaction = await Moralis.executeFunction(sendOptions)
    .catch(
      (error) => {
        toast.error("Already claimed air drop or not elegible")
        setIsLoading(false)
      },
    );
    console.log(`Transaction Hash: ${transaction.hash}`)
    const result = await transaction.wait();
    console.log(result)
    setIsLoading(false)
    toast.success("Tokens Received! check your Balance...");
  }

  return (
    <>
    {isLoading ? (
      <LoadingSpinner logo={logo}/>
    ) : (
    <MainContainer>
      <br/>
      <br/>
      <h3 className="bold color-primary">Claim your Token!!!</h3>
      <br/>
      <Select options={userTokenList} onChange={selected} />
      <br/>
      <Button
        label={'Claim'}
        onClick={claim}
        classnames={[' secondary-btn snapshot']}
      />
    </MainContainer>
    )}
  </>
  )
}

export default Claim
