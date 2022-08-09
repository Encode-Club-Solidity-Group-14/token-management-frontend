import {
    ERC20_ABI,
    ERC20_MINT_ABI
  } from "../../../abis/constants"

export function decode(input, tokenType){
    const InputDataDecoder = require('ethereum-input-data-decoder');
    const decoder = new InputDataDecoder(getABI(tokenType));
    const inputDecoded = decoder.decodeData(input);
    return inputDecoded.method;
}


function getABI(type){
    switch (type) {
        case "ERC20":
            return ERC20_MINT_ABI;
        case "ERC20_MINT":
            return ERC20_MINT_ABI;
        case "ERC20Burn":
            return ERC20_MINT_ABI; //TODO change here
        default:
         return ERC20_MINT_ABI; //TODO change here
    }
}