import Bottle from 'bottlejs';
import memory from '../infrastructure/memory';

import parameters from '../../config/server';
import callback from './callback';
import server from './http';

import launcher from './launcher';

const bottle = new Bottle('LaunchServer');
bottle.strict = true;

bottle.constant('memory', memory);
bottle.constant('parameters', parameters);

bottle.serviceFactory('callback', callback, 'parameters');
bottle.serviceFactory('server', server, 'parameters', 'callback');
bottle.serviceFactory('launcher', launcher, 'server', 'memory');

export default bottle.container;
