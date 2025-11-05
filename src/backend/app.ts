// Load small compatibility shims before any other modules so that
// older dependencies (like `nedb`) which expect Node < 24 helpers
// (e.g. util.isDate) continue to work under newer Node versions.
import './compat.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import runHttpServer from './server.js';
import buildStatic from './build-static.js';

yargs(hideBin(process.argv))
  .option('config', {
    alias: 'c',
    type: 'string',
    default: './docs-config.yaml',
    description: 'Config files paths',
  })
  .help('h')
  .alias('h', 'help')
  .command('$0', 'start the server', () => {/* empty */}, runHttpServer)
  .command('build-static', 'build files from database', () => {/* empty */}, async () => {
    await buildStatic();
    process.exit(0);
  })
  .parse();
