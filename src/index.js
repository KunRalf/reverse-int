module.exports = function reverse (n) {
    let strReverse = Math.abs(n).toString().split('');
    return +strReverse.reverse().join('');
}
