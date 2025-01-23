const assert = require('assert');

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

mongoose.set('debug', !!process.env.MONGOOSE_DEBUG);

const { router } = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()).use(router);

main();

async function main() {
  const { DB_URI } = process.env;
  assert(DB_URI, 'DB_URI is required');
  await mongoose.connect(DB_URI);

  app.listen(PORT, () => console.log(`Express listening on http://localhost:${PORT}`));
}
