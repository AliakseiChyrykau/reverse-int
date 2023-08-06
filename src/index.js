module.exports = function reverse (n) {
    revers = String(Math.abs(n)).split("").reverse().join("");  
    return Number(revers);
}
