module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig.map(i => i.join(''));
    let string = str, tmp;

    do {
        tmp = string;
        config.forEach(i => string = string.replace(i, ''));
    } while (string.length < tmp.length)

    return !string.length;
}
