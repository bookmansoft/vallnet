﻿'use strict';

const assert = require('assert');
const common = exports;

common.revHex = function revHex(data) {
  assert(typeof data === 'string');
  assert(data.length > 0);
  assert(data.length % 2 === 0);

  let out = '';

  for (let i = 0; i < data.length; i += 2)
    out = data.slice(i, i + 2) + out;

  return out;
};

//节点配置信息
common.notes = [
  {alliance: 'root',   id: 0, name: 'root.0',   ip: '127.0.0.1', inner:'127.0.0.1', rpc: 2102, tcp: 2100},
  {alliance: 'mchain', id: 1, name: 'mchain.1', ip: '127.0.0.1', inner:'127.0.0.1', rpc: 2112, tcp: 2110},
  {alliance: 'mchain', id: 2, name: 'mchain.2', ip: '127.0.0.1', inner:'127.0.0.1', rpc: 2122, tcp: 2120},
  {alliance: 'mchain', id: 3, name: 'mchain.3', ip: '127.0.0.1', inner:'127.0.0.1', rpc: 2132, tcp: 2130},
];