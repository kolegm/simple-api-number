import type Bottlejs from 'bottlejs';

import multiple from './usecases/multiple';

export default (bottle: Bottlejs) => {
  bottle.serviceFactory('usecase.multiple', multiple);
};
