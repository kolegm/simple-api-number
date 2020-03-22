import type Bottlejs from 'bottlejs';

import multiple from './multiple';

export default (bottle: Bottlejs) => {
  bottle.serviceFactory('service.multiple', multiple);
};

