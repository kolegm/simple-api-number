const http = require('http');

const TIME_POINT = '<<< Server APP is launched in';

const defaultListener = async (
  request: IncomingMessage,
  response: ServerResponse,
  next: Function
) => {
  const result = { message: 'Default request listener' };

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(result));
  response.end();
};

const createServer = ({ hostname, port, handler, callback }) =>
  http.createServer(handler).listen({ port, hostname }, callback);

export default (parameters: Object, callback: Function) => {
  const { hostname, port } = parameters || {};

  return (requestListener: ?Function) => {
    console.time(TIME_POINT);

    const _callback = () => {
      callback();
      console.timeEnd(TIME_POINT);
    };

    const handler =
      typeof requestListener === 'function' ? requestListener : defaultListener;

    return createServer({
      port,
      hostname,
      handler,
      callback: _callback
    });
  };
};
