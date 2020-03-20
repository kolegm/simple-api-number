const handler = (error: ?Error, signal: string) => {
  if (error) {
    console.error(`Signal: ${signal}`, error);
    process.exit(1);
  } else {
    console.info(
      `The service node needs to be restarted. '${signal}' signal was called`
    );
    process.exit(0);
  }
};

process.on('uncaughtException', error => handler(error, 'uncaughtException'));
process.on('unhandledRejection', error => handler(error, 'unhandledRejection'));
