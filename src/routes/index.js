const assert = require('assert');

const express = require('express');
const { nanoid } = require('nanoid');

const { Short } = require('../models');

const router = express.Router();

const { SHORTEN_LENGTH = '5' } = process.env;
const shortLen = parseInt(SHORTEN_LENGTH, 10) || 5;

const shortUrl = async (url) => {
  const short = nanoid(shortLen);
  const doc = new Short({ short, url });
  await doc.save();

  return `http://localhost:${process.env.PORT}/?q=${short}`;
};

router.post('/shorten', async (req, res) => {
  const url = req.body.url;
  assert(url, 'url is required');

  const short = await shortUrl(url);
  res.json({ url: short });
});

router.get('/', async (req, res) => {
  const doc = await Short.findOne({ short: req.query.q });
  if (!doc) return res.sendStatus(404);

  res.redirect(doc.url);
});

exports.router = router;
