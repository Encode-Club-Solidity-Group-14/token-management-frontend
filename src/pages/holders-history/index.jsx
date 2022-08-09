import React from 'react'
import CustomizedTables from '../../components/Table'
import Button from '../../components/ButtonComponent/Button'
import {
  holdersHeaders,
  holdersRows,
} from '../../components/Table/holders-data'
import { useMoralis } from 'react-moralis'

const TopHoldersHistory = (props) => {

  const { user, Moralis} = useMoralis();

  const submit = async () => {
    console.log("teste")
    const options = {
      chainId: 42,
      contractAddress: props.token?.attributes?.address.toLowerCase()
      }
    const result = await Moralis.Plugins.covalent.getBlockTokenHolders(options);
    console.log(result)
  }

  return (
    <>
      <Button
        label={'TESTE'}
        onClick={submit}
        classnames={[' secondary-btn snapshot']}
      />
      <CustomizedTables rows={holdersRows} tableHeaders={holdersHeaders} />
    </>
  )
}

export default TopHoldersHistory
