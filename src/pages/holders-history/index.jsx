import React from 'react'
import CustomizedTables from '../../components/Table'
import {
  holdersHeaders,
  createData,
} from '../../components/Table/holders-data'
import { useMoralis } from 'react-moralis'
import { percentage } from './utils/percentage-calculator'
import { useEffect, useState } from 'react'
import { ethers, BigNumber } from "ethers";

const TopHoldersHistory = (props) => {

  const fromWei = (num) => ethers.utils.formatEther(num)

  const { user, Moralis} = useMoralis();
  const [holderHistory, setHolderHistory] = useState([])

  useEffect(() => {
    const tokenAddress = props.token?.attributes?.address.toLowerCase();
    if(tokenAddress){
      const fetchData = async () => {
        const options = {
          chainId: 42,
          contractAddress: props.token?.attributes?.address.toLowerCase()
          }
        const result = await Moralis.Plugins.covalent.getBlockTokenHolders(options);
        console.log("Covalent response:");
        console.log(result?.data?.items);
        let holders = [];
        if(result){
          let ownerBalance = props.totalSupply;
          result.data.items.map((user) => {
            ownerBalance = ownerBalance - user.balance;
            const holder = {
              address: user.address,
              balance: String(user.balance),
              percentage: percentage(user.balance, props.totalSupply).toFixed(2)+"%",
              balanceInUSD: "$"+ fromWei(user.balance) //TODO learn how to get this value fom uni or datafeeds IDK
            }
            holders.push(createData(
              holder.address,
              fromWei(holder.balance),
              holder.percentage,
              holder.balanceInUSD
            ))
          })
          const owner = {
            address: "OWNER",
            balance: String(ownerBalance),
            percentage: percentage(ownerBalance, props.totalSupply).toFixed(2)+"%",
            balanceInUSD: "$"+ fromWei(ownerBalance.toString()) //TODO learn how to get this value fom uni or datafeeds IDK
          }
          if(owner.balance !== undefined && owner.balance !== "" && owner.balance > 0){  
            holders.push(createData(
              owner.address,
              fromWei(owner.balance),
              owner.percentage,
              owner.balanceInUSD
            ))
          }
          console.log("Trixie - Holders:");
          console.log(holders);
          setHolderHistory(holders);
        }
      }
      fetchData().catch((error) => {
        console.error(error)
      })
    }
  }, [user, props])

  return (
    <>
      <CustomizedTables rows={holderHistory} tableHeaders={holdersHeaders} />
    </>
  )
}

export default TopHoldersHistory
