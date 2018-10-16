import * as Redis from "ioredis";
import * as logger from 'signale';

(async () => {
  const redis = new Redis(); // 127.0.0.1:6379

  const pong = await redis.ping();
  logger.success(pong);

  redis.disconnect();
})();
