export default () => async (num: number|string) => {
  if (typeof num === 'string') {
    const parsed = parseInt(num);

    // Be attentive. The comparison must be non-strict cause string and number
    if (num != parsed) throw new TypeError('Incorrect number (mix of digits and alphabetic chars)');
    num = parsed;
  }

  if (!Number.isInteger(num)) throw new TypeError('Number is not integer');

  const result = [];
  if (!(num % 3)) result.push('P');
  if (!(num % 5)) result.push('E');

  return result.length ? result.join('') : num;
};
