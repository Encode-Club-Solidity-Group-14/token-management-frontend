import {
    ERC20_ADDRESS,
    ERC20_MINT, 
    ERC20_BURN,
    ERC20_MINT_BURN,
    ERC20_OWNABLE,
    ERC20_PAUSABLE,
    ERC20_AIRDROP,
    ERC20_FLASH_MINT,
    ERC20_SNAPSHOTS 
  } from "../../abis/constants"

export function findAddress(tokenCharacteristc){
    // TODO TEST LIKE THAT:
    // switch (tokenCharacteristc) {
    //     case tokenCharacteristc.ERC20Mint && tokenCharacteristc.ERC20Burn && tokenCharacteristc.ERC20Pausable:

    if(tokenCharacteristc.ERC20AirDrop){
        return ERC20_AIRDROP;
    }
    if(tokenCharacteristc.ERC20Mint && tokenCharacteristc.ERC20Burn && tokenCharacteristc.ERC20Pausable){
        return ERC20_MINT_BURN_PAUSABLE;
    }
    if(tokenCharacteristc.ERC20Mint && tokenCharacteristc.ERC20Burn){
        return ERC20_MINT_BURN;
    }
    if(tokenCharacteristc.ERC20Mint && tokenCharacteristc.ERC20Pausable){
        return ERC20_MINT_PAUSABLE
    }
    if(tokenCharacteristc.ERC20Pausable && tokenCharacteristc.ERC20Burn){
        return ERC20_BURN_PAUSABLE;
    }
    if(tokenCharacteristc.ERC20Mint){
        return ERC20_MINT;
    }
    if(tokenCharacteristc.ERC20Burn){
        return ERC20_BURN;
    }
    if(tokenCharacteristc.ERC20Ownable){
        return ERC20_OWNABLE;
    }
    if(tokenCharacteristc.ERC20Pausable){
        return ERC20_PAUSABLE;
    }
    if(tokenCharacteristc.ERC20FlashMint){
        return ERC20_FLASH_MINT;
    }
    if(tokenCharacteristc.ERC20_SNAPSHOTS){
        return ERC20_SNAPSHOTS;
    }
    return ERC20_ADDRESS;
}