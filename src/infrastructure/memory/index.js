const util = require('util');

const convertToMBytes = _number => {
  _number = parseInt(_number);
  if (!_number || _number <= 0) return 0;
  return parseInt(_number / 1024 / 1024);
};

export default () => {
  const memory = process.memoryUsage();

  return util.format(
    '[pid=%d, memory rss=%dMB, total=%dMb, used=%dMb]',
    process.pid,
    convertToMBytes(memory.rss),
    convertToMBytes(memory.heapTotal),
    convertToMBytes(
      memory.heapUsed
    ) /*,
    convertToMBytes(memory.external)
    */
  );
};
