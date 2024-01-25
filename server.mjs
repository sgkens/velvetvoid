/**
 * @file simple_dev_server_v1.0.mjs
 * @version 1.0.0
 * @description A simple development server for static files
 * @license MIT
 * @example node simple_dev_server_v1.0.mjs
 * @example node simple_dev_server_v1.0.mjs 8890
 */

import express from 'express';
// import serveIndex from 'serve-index';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fs from 'fs';

const address = '127.0.0.1'
const port = '8089';
const localserver = express();

// Serve static files and directory listing
// if(fs.existsSync(__dirname + '/index.html')) {
//     devserver.use( express.static(__dirname) );
// }else{
//     devserver.use( express.static(`/${__filename}`), serveIndex(__dirname, {'icons': true}));
// }

localserver.use('/static', express.static( 'src' ) );

localserver.listen(port, address, (res,req) => {
  console.log(`Server listening on http://${address}:${port}`);
});