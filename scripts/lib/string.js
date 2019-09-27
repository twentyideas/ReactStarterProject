const containsWhitespace = (str) => str.indexOf(" ") !== -1
const containsNumbers = (str) => str.match(/[0-9]/g) !== null
const containsAlphabets = (str) => str.match(/[a-z]/g) !== null
const isOnlyAlphanumeric = (str) => str.match(/^[0-9a-zA-Z]+$/) !== null
const isOnlyAlpha = (str) => str.match(/^[a-zA-Z]+$/) !== null
const isOnlyNumeric = (str) => str.match(/^([0-9])+([.])*([0-9])+$/) !== null
const isInteger = (str) => str.match(/^[0-9]+$/g) !== null
const replace = (source, search, replacement) => source.replace(new RegExp(search, 'g'), replacement)

module.exports = {
    containsWhitespace,
    containsNumbers,
    containsAlphabets,
    isOnlyAlphanumeric,
    isOnlyNumeric,
    isOnlyAlpha,
    isInteger,
    replace
}