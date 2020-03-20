import zlib from 'zlib';
import compress from 'koa-compress';
import helmet from 'koa-helmet';
import bodyparser from 'koa-bodyparser';
import cors from '@koa/cors';
import requestId from 'koa-requestid';
import responseTime from 'koa-response-time';
import validator from 'koa-async-validator';

export default [
  helmet(),
  cors(),
  compress({
    flush: zlib.Z_SYNC_FLUSH,
    threshold: 1
  }),
  bodyparser({
    enableTypes: ['json'],
    onerror: (error, context) => {
      if (error) console.error(error);
      context.throw(422, new Error('Body parse error'));
    }
  }),
  requestId(),
  responseTime(),
  validator()
];
