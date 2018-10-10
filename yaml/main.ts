import * as yaml from 'js-yaml';
import {promises as fs} from 'fs';
import * as path from 'path';
import * as logger from 'signale';

(async () => {
  const filePath = path.resolve(__dirname, './data/dict.yml');
  const content = await fs.readFile(filePath, 'utf8');
  const obj = yaml.safeLoad(content);

  const jsonStr = JSON.stringify(obj.typescript, null, 2);
  logger.success(`YAML file content:\n${jsonStr}`);
})();
