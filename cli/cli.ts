import * as Path from 'path';
import {CLI, Shim} from 'clime';

(async () => {
  let cli = new CLI('greet', Path.join(__dirname, 'commands'));
  let shim = new Shim(cli);
  await shim.execute(process.argv);
})();
