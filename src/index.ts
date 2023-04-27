#!/usr/bin/env node
import * as figlet from 'figlet';
import {program} from 'commander';
import chalk from 'chalk';
import * as express from 'express';

const app = express();

program
  .name('photon-sync')
  .description('Sync directory with samba server')
  .version('0.0.7');

program.option('-p, --port <port>', 'port of web interface', '9901');

program.parse();

const options = program.opts();

async function run() {
  app.listen(parseInt(options.port), () => {
    console.log(`Web Interface online at http://localhost:${options.port}!`);
  });
}

run().then(r => {});
