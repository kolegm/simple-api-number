import type Bottlejs from 'bottlejs';

import error from './error';
import errorCatching from './error-catching';

import last4post from './last4post';
import metrics from './metrics';

import ping from './ping';
import fail from './fail';

import redirectTo from './redirect-to';

import input from './input';

import numberValidation from './number-validation';
import number from './number';

export default (bottle: Bottlejs) => {
  bottle.serviceFactory('handler.error', error);
  bottle.serviceFactory('handler.errorCatching', errorCatching);
  bottle.serviceFactory('handler.last4post', last4post);

  bottle.serviceFactory('handler.metrics', metrics, 'memory');
  bottle.serviceFactory('handler.ping', ping);
  bottle.serviceFactory('handler.fail', fail);

  bottle.serviceFactory('handler.defaultPage', redirectTo, 'rootPath');
  bottle.serviceFactory('handler.input', input);
  bottle.serviceFactory('handler.numberValidation', numberValidation);
  bottle.serviceFactory('handler.number', number, 'usecase.multiple');
};
