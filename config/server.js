const port: number = parseInt(process.env.PORT) || 3000;
const hostname: string = '' + (process.env.HOSTNAME || '127.0.0.1');

export default { hostname, port };
