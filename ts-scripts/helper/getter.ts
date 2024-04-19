import { Network, isTestnet, isMainnet } from '@injectivelabs/networks'
import {
  readJSONFile,
  denomsToDenomMap,
  tokensToDenomMap,
  bankMetadataToDenomMap,
  bankMetadataToCw20DenomMap
} from './../helper/utils'
import { Token, BankMetadata } from './../types'

const devnetCw20BankMetadataMap = bankMetadataToCw20DenomMap(
  readJSONFile({ path: 'tokens/bankMetadata/devnet.json' })
)

const testnetCw20BankMetadataMap = bankMetadataToCw20DenomMap(
  readJSONFile({ path: 'tokens/bankMetadata/testnet.json' })
)

const mainnetCw20BankMetadataMap = bankMetadataToCw20DenomMap(
  readJSONFile({ path: 'tokens/bankMetadata/mainnet.json' })
)

const devnetBankMetadataMap = bankMetadataToDenomMap(
  readJSONFile({ path: 'tokens/bankMetadata/devnet.json' })
)
const testnetBankMetadataMap = bankMetadataToDenomMap(
  readJSONFile({ path: 'tokens/bankMetadata/testnet.json' })
)
const mainnetBankMetadataMap = bankMetadataToDenomMap(
  readJSONFile({ path: 'tokens/bankMetadata/mainnet.json' })
)

const devnetInsuranceFundsMap = tokensToDenomMap(
  readJSONFile({ path: 'tokens/insuranceFunds/devnet.json' })
)
const testnetInsuranceFundsMap = tokensToDenomMap(
  readJSONFile({ path: 'tokens/insuranceFunds/testnet.json' })
)
const mainnetInsuranceFundsMap = tokensToDenomMap(
  readJSONFile({ path: 'tokens/insuranceFunds/mainnet.json' })
)

const devnetSupplyDenomMap = denomsToDenomMap(
  readJSONFile({ path: 'tokens/bankSupplyDenoms/devnet.json' })
)

const testnetSupplyDenomMap = denomsToDenomMap(
  readJSONFile({ path: 'tokens/bankSupplyDenoms/testnet.json' })
)

const mainnetSupplyDenomMap = denomsToDenomMap(
  readJSONFile({ path: 'tokens/bankSupplyDenoms/mainnet.json' })
)

export const getSupplyDenom = (
  denom: string,
  network: Network
): string | undefined => {
  const formattedDenom = denom.toLowerCase()

  if (isMainnet(network)) {
    return mainnetSupplyDenomMap[formattedDenom]
  }

  if (isTestnet(network)) {
    return testnetSupplyDenomMap[formattedDenom]
  }

  return devnetSupplyDenomMap[formattedDenom]
}

export const getCw20BankMetadata = (
  denom: string,
  network: Network
): BankMetadata | undefined => {
  const formattedDenom = denom.toLowerCase()

  if (isMainnet(network)) {
    return mainnetCw20BankMetadataMap[formattedDenom]
  }

  if (isTestnet(network)) {
    return testnetCw20BankMetadataMap[formattedDenom]
  }

  return devnetCw20BankMetadataMap[formattedDenom]
}

export const getBankTokenMetadata = (
  denom: string,
  network: Network
): BankMetadata | undefined => {
  const formattedDenom = denom.toLowerCase()

  if (isMainnet(network)) {
    return mainnetBankMetadataMap[formattedDenom]
  }

  if (isTestnet(network)) {
    return testnetBankMetadataMap[formattedDenom]
  }

  return devnetBankMetadataMap[formattedDenom]
}

export const getInsuranceFundToken = (
  denom: string,
  network: Network
): Token | undefined => {
  const formattedDenom = denom.toLowerCase()

  if (isMainnet(network)) {
    return mainnetInsuranceFundsMap[formattedDenom]
  }

  if (isTestnet(network)) {
    return testnetInsuranceFundsMap[formattedDenom]
  }

  return devnetInsuranceFundsMap[formattedDenom]
}
