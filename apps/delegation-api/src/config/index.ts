import {envload} from './env_load';
envload();
import config from 'config';
import { CachingConfig } from '../models';

export const elrondConfig = {
  auctionContract : "erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqplllst77y4l",
  stakingContract : "erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqylllslmq6y6",
  chainId: "1",
  version: 1,
  metaChainShardId: 4294967295,
  transactionProcessorMaxLookBehind: 1000,
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
