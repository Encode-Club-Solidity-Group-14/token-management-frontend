import { getABI } from '../../token-generator/token-generator'

export function decode(input, tokenType) {
  const InputDataDecoder = require('ethereum-input-data-decoder')
  const decoder = new InputDataDecoder(getABI(tokenType))
  const inputDecoded = decoder.decodeData(input)
  return inputDecoded.method
}
