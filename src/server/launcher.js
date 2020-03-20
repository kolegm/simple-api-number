const TIME_POINT = '>>> Server is started in';

export default (httpServer: Function, memoryUsage: Function) => async (
  appFactory: Function = null
) => {
  console.info('Launch server. Process pid: ', process.pid);
  console.time(TIME_POINT);

  try {
    // Start HTTP-server
    httpServer(appFactory);
  } catch (error) {
    console.error('Failured launch server', error);
  } finally {
    console.timeEnd(TIME_POINT);
    console.info('Memory consumption: ', memoryUsage());
  }
};
