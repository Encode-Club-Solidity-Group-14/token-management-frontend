import {
  ERC20_ADDRESS,
  ERC20_MINT,
  ERC20_BURN,
  ERC20_MINT_BURN,
  ERC20_OWNABLE,
  ERC20_PAUSABLE,
  ERC20_AIRDROP,
  ERC20_FLASH_MINT,
  ERC20_SNAPSHOTS,
  ERC20_ABI,
  ERC20_MINT_ABI,
  ERC20_AIRDROP_ABI,
  ERC20_BURNABLE_ABI,
  ERC20_MINT_BURN_PAUSE_ABI,
} from '../../abis/constants'

export function findAddress(tokenCharacteristc) {
  // TODO TEST LIKE THAT:
  // switch (tokenCharacteristc) {
  //     case tokenCharacteristc.ERC20Mint && tokenCharacteristc.ERC20Burn && tokenCharacteristc.ERC20Pausable:

  if (tokenCharacteristc.ERC20AirDrop) {
    console.log('Token to create - ERC20_AIRDROP')
    const address = ERC20_AIRDROP
    const type = 'ERC20_AIRDROP'
    return { address, type }
  }
  if (
    tokenCharacteristc.ERC20Mint &&
    tokenCharacteristc.ERC20Burn &&
    tokenCharacteristc.ERC20Pausable
  ) {
    console.log('Token to create - ERC20_MINT_BURN_PAUSABLE')
    const address = ERC20_MINT_BURN_PAUSABLE
    const type = 'ERC20_MINT_BURN_PAUSABLE'
    return { address, type }
  }
  if (tokenCharacteristc.ERC20Mint && tokenCharacteristc.ERC20Burn) {
    console.log('Token to create - ERC20_MINT_BURN')
    const address = ERC20_MINT_BURN
    const type = 'ERC20_MINT_BURN'
    return { address, type }
  }
  if (tokenCharacteristc.ERC20Mint && tokenCharacteristc.ERC20Pausable) {
    console.log('Token to create - ERC20_MINT_PAUSABLE')
    const address = ERC20_MINT_PAUSABLE
    const type = 'ERC20_MINT_PAUSABLE'
    return { address, type }
  }
  if (tokenCharacteristc.ERC20Pausable && tokenCharacteristc.ERC20Burn) {
    console.log('Token to create - ERC20_BURN_PAUSABLE')
    const address = ERC20_BURN_PAUSABLE
    const type = 'ERC20_BURN_PAUSABLE'
    return { address, type }
  }
  if (tokenCharacteristc.ERC20Mint) {
    console.log('Token to create - ERC20_MINT')
    const address = ERC20_MINT
    const type = 'ERC20_MINT'
    return { address, type }
  }
  if (tokenCharacteristc.ERC20Burn) {
    console.log('Token to create - ERC20_BURN')
    const address = ERC20_BURN
    const type = 'ERC20_BURN'
    return { address, type }
  }
  if (tokenCharacteristc.ERC20Pausable) {
    console.log('Token to create - ERC20_PAUSABLE')
    const address = ERC20_PAUSABLE
    const type = 'ERC20_PAUSABLE'
    return { address, type }
  }
  if (tokenCharacteristc.ERC20FlashMint) {
    console.log('Token to create - ERC20_FLASH_MINT')
    const address = ERC20_FLASH_MINT
    const type = 'ERC20_FLASH_MINT'
    return { address, type }
  }
  if (tokenCharacteristc.ERC20_SNAPSHOTS) {
    console.log('Token to create - ERC20_SNAPSHOTS')
    const address = ERC20_SNAPSHOTS
    const type = 'ERC20_SNAPSHOTS'
    return { address, type }
  }
  if (tokenCharacteristc.ERC20Ownable) {
    console.log('Token to create - ERC20_OWNABLE')
    const address = ERC20_OWNABLE
    const type = 'ERC20_OWNABLE'
    return { address, type }
  }
  console.log('Token to create - ERC20_ADDRESS')
  const address = ERC20_ADDRESS
  const type = 'ERC20'
  return { address, type }
}

export function isMint(type) {
  switch (type) {
    case 'ERC20_MINT':
      return true
    case 'ERC20_MINT_BURN':
      return true
    case 'ERC20_AIRDROP':
      return true
    case 'ERC20_FLASH_MINT':
      return true
    case 'ERC20_AIRDROP':
      return true
    default:
      return false
  }
}

export function isPausable(type) {
  switch (type) {
    case 'ERC20_PAUSABLE':
      return true
    case 'ERC20_MINT_PAUSABLE':
      return true
    case 'ERC20_BURN_PAUSABLE':
      return true
    case 'ERC20_MINT_BURN_PAUSABLE':
      return true
    default:
      return false
  }
}

export function isBurnable(type) {
  switch (type) {
    case 'ERC20_BURN':
      return true
    case 'ERC20_MINT_BURN':
      return true
    case 'ERC20_BURN_PAUSABLE':
      return true
    case 'ERC20_MINT_BURN_PAUSABLE':
      return true
    case 'ERC20_AIRDROP':
      return true
    default:
      return false
  }
}

export function isSnaphots(type) {
  switch (type) {
    case 'ERC20_SNAPSHOTS':
      return true
    default:
      return false
  }
}
export function isAirdrop(type) {
  switch (type) {
    case 'ERC20_AIRDROP':
      return true
    default:
      return false
  }
}

export function getABI(type) {
  switch (type) {
    case 'ERC20':
      return ERC20_ABI
    case 'ERC20_MINT':
      return ERC20_MINT_ABI
    case 'ERC20_BURN':
      return ERC20_BURNABLE_ABI
    case 'ERC20_AIRDROP':
      return ERC20_AIRDROP_ABI
    default:
      return ERC20_MINT_BURN_PAUSE_ABI //TODO missing vote
  }
}
