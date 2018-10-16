import * as logger from 'signale';
import {Grade} from './grade';

(async () => {
  logger.success('_____ Standard access _____');
  logger.success(`by name : ${Grade[1]}`);
  logger.success(`by value: ${Grade['SILVER']}`);
  logger.success('_____ Added functions _____');
  logger.success(`#names : ${Grade.names()}`);
  logger.success(`#values: ${Grade.values()}`);
  logger.success(`#length: ${Grade.length()}`);
})();
