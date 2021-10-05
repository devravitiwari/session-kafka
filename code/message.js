const createRandomMessage = (size = 12) => {
  const salt = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let hash = '';
  [...Array(size).keys()].forEach(function () {
    hash += salt[0 | (Math.random() * salt.length)];
  });
  return hash;
}

module.exports = {
  getMessage: createRandomMessage
};