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
        console.log("Token to create - ERC20_AIRDROP")
        return ERC20_AIRDROP;
    }
    if(tokenCharacteristc.ERC20Mint && tokenCharacteristc.ERC20Burn && tokenCharacteristc.ERC20Pausable){
        console.log("Token to create - ERC20_MINT_BURN_PAUSABLE")
        return ERC20_MINT_BURN_PAUSABLE;
    }
    if(tokenCharacteristc.ERC20Mint && tokenCharacteristc.ERC20Burn){
        console.log("Token to create - ERC20_MINT_BURN")
        return ERC20_MINT_BURN;
    }
    if(tokenCharacteristc.ERC20Mint && tokenCharacteristc.ERC20Pausable){
        console.log("Token to create - ERC20_MINT_PAUSABLE")
        return ERC20_MINT_PAUSABLE
    }
    if(tokenCharacteristc.ERC20Pausable && tokenCharacteristc.ERC20Burn){
        console.log("Token to create - ERC20_BURN_PAUSABLE")
        return ERC20_BURN_PAUSABLE;
    }
    if(tokenCharacteristc.ERC20Mint){
        console.log("Token to create - ERC20_MINT")
        return ERC20_MINT;
    }
    if(tokenCharacteristc.ERC20Burn){
        console.log("Token to create - ERC20_BURN")
        return ERC20_BURN;
    }
    if(tokenCharacteristc.ERC20Ownable){
        console.log("Token to create - ERC20_OWNABLE")
        return ERC20_OWNABLE;
    }
    if(tokenCharacteristc.ERC20Pausable){
        console.log("Token to create - ERC20_PAUSABLE")
        return ERC20_PAUSABLE;
    }
    if(tokenCharacteristc.ERC20FlashMint){
        console.log("Token to create - ERC20_FLASH_MINT")
        return ERC20_FLASH_MINT;
    }
    if(tokenCharacteristc.ERC20_SNAPSHOTS){
        console.log("Token to create - ERC20_SNAPSHOTS")
        return ERC20_SNAPSHOTS;
    }
    console.log("Token to create - ERC20_ADDRESS")
    return ERC20_ADDRESS;
}