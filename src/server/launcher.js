const TIME_POINT = '>>> Server is started in';

type ApplicationFactory = Function;

export default (httpServer: Function, memoryUsage: Function) => async (
  appFactory: ApplicationFactory
) => {
  console.info('Launch server. Process pid: ', process.pid);
  console.time(TIME_POINT);

  try {
    const application = (await appFactory()) || {};
    if (!application || typeof application !== 'object')
      throw new TypeError('Invalid application instance');

    // Start HTTP-server
    httpServer(application.callback());
  } catch (error) {
    console.error('Failured launch server', error);
  } finally {
    console.timeEnd(TIME_POINT);
    console.info('Memory consumption: ', memoryUsage());
  }
};
