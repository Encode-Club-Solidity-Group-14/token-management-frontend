import React from 'react'
import CustomizedTables from '../../components/Table'
import Button from '../../components/ButtonComponent/Button'
import {
  holdersHeaders,
  createData,
} from '../../components/Table/holders-data'
import { useMoralis } from 'react-moralis'
import { percentage } from './utils/percentage-calculator'
import { useEffect, useState } from 'react'

const TopHoldersHistory = (props) => {

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
        if(result){
          let ownerBalance = props.totalSupply;
          let holders = [];
          result.data.items.map((user) => {
            ownerBalance = ownerBalance - user.balance;
            const holder = {
              address: user.address,
              balance: user.balance,
              percentage: percentage(user.balance, props.totalSupply)+"%",
              balanceInUSD: "$"+user.balance //TODO learn how to get this value fom uni or datafeeds IDK
            }
            holders.push(createData(
              holder.address,
              holder.balance,
              holder.percentage,
              holder.balanceInUSD
            ))
          })
          const owner = {
            address: "OWNER",
            balance: ownerBalance,
            percentage: percentage(ownerBalance, props.totalSupply)+"%",
            balanceInUSD: "$"+ownerBalance //TODO learn how to get this value fom uni or datafeeds IDK
          }
          holders.push(createData(
            owner.address,
            owner.balance,
            owner.percentage,
            owner.balanceInUSD
          ))
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
