export default (parameters: Object) => {
  const { hostname, port, domain } = parameters || {};

  return () => {
    console.info(
      `pid=${process.pid}. 🚀 Server is ready at ${hostname}:${port}.`
    );
    console.info(`Domain: http://${domain || 'localhost'}`);
  };
};
