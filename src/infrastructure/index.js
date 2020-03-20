import type Bottlejs from 'bottlejs';

import memory from './memory';

export default (bottle: Bottlejs) => {
  bottle.constant('memory', memory);
};
