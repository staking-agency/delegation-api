import {envload} from './env_load';
envload();
import config from 'config';
import { CachingConfig } from '../models';

export const elrondConfig = {
  "auctionContract" : "erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqplllst77y4l",
  "stakingContract" : "erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqylllslmq6y6",
  "blsRewardsAddress": "erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqllls0lczs7",
  "yearSettings" : [
    { "year": 1, "maximumInflation": 0.1084513 },
    { "year": 2, "maximumInflation": 0.09703538 },
    { "year": 3, "maximumInflation": 0.08561945 },
    { "year": 4, "maximumInflation": 0.07420352 },
    { "year": 5, "maximumInflation": 0.0627876 },
    { "year": 6, "maximumInflation": 0.05137167 },
    { "year": 7, "maximumInflation": 0.03995574 },
    { "year": 8, "maximumInflation": 0.02853982 },
    { "year": 9, "maximumInflation": 0.01712389 },
    { "year": 10, "maximumInflation": 0.00570796 },
    { "year": 11, "maximumInflation": 0.0 }
  ],
  "genesisTokenSupply": 20000000,
  "decimals": 2,
  "denomination": 18,
  "chainID": "T",
  "version": 1,
  "metaChainShardId": 4294967295,
  "feesInEpoch": 0,
  "stakePerNode": 2500,
  "protocolSustainabilityRewards": 0.1,
  "minimumAmountOwner": 1250,
  "delegationGasLimits": [6000000, 12000000, 25000000],
  "transactionProcessorMaxLookBehind": 10,
  elastic: process.env.ELROND_INDEX,
  elrondApi: process.env.ELROND_API,
  gateway: process.env.ELROND_GATEWAY,
  explorer: process.env.ELROND_EXPLORER,
};
/**
 * Caching time config.
 * The values are in seconds
 */
export const cacheConfig: CachingConfig = config.get('caching');
