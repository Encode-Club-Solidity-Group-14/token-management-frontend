import React from 'react'
import logo from '../../assets/alien-reading-book-animation.gif'
import CustomizedTables from '../../components/Table'
import {
  transactionHistoryHeaders,
  createData,
} from '../../components/Table/transaction-data'
import { decode } from './utils/input-converter'
import { useMoralis } from 'react-moralis'
import { useEffect, useState } from 'react'

const TransactionHistory = (props) => {

  const { user, Moralis} = useMoralis()
  const [isLoading, setIsLoading] = useState(false)
  const [transactionHistory, setTransactionHistory] = useState([])

  useEffect(() => {
    setIsLoading(true)
    if (user) {
      const fetchData = async () => {
        const query = new Moralis.Query('EthTransactions')
        query.equalTo(
          'to_address',
          props.token?.attributes?.address.toLowerCase(),
        )
        const results = await query.find()
        if (results) {
          let transactions = []
          results.map((tx) => {
            const transaction = {
              from: tx.attributes.from_address,
              to: tx.attributes.to_address,
              quantity: 1,
              time: String(tx.createdAt).split("(")[0],
              method: decode(tx.attributes.input, props.token?.attributes?.type),
              txHash: tx.attributes.hash,
            }
            transactions.push(
              createData(
                transaction.from,
                transaction.to,
                transaction.quantity,
                transaction.time,
                transaction.method,
                transaction.txHash,
              ),
            )
          })
          setTransactionHistory(transactions)
        }
      }
      fetchData().catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
      setIsLoading(false)
    }
  }, [user, props])

  return (
    <>
      {isLoading ? (
        <LoadingSpinner logo={logo} />
      ) : (
        <CustomizedTables
          dataType="transaction-history"
          rows={transactionHistory}
          tableHeaders={transactionHistoryHeaders}
        />
      )}
    </>
  )
}

export default TransactionHistory