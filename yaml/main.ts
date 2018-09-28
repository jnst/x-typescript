import * as yaml from 'js-yaml';
import {promises as fs} from 'fs';
import * as path from 'path';

(async () => {
  const fixturePath = path.resolve(__dirname, `./data/dict.yml`);
  const file = await fs.readFile(fixturePath, 'utf8');
  const obj = yaml.safeLoad(file);
  console.log(JSON.stringify(obj.typescript, null, 2));
})();
