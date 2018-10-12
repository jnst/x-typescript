import * as Redis from "ioredis";
import * as logger from 'signale';

(async () => {
  const redis = new Redis('127.0.0.1');

  const result = await redis.ping();
  logger.success(result);

  redis.disconnect();
})();
