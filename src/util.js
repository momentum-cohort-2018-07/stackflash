var TRIM_CHARS = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF'
var TRUNC_REG = RegExp('(?=[' + TRIM_CHARS + '])')

export function isUndefined (o) {
  return o === undefined
}

export function reverseString (str) {
  return str.split('').reverse().join('')
}

export function truncateOnWord (str, limit, fromLeft) {
  if (fromLeft) {
    return reverseString(truncateOnWord(reverseString(str), limit))
  }
  var words = str.split(TRUNC_REG)
  var count = 0
  return words.filter((word) => {
    count += word.length
    return count <= limit
  }).join('')
}

export function truncateString (str, length, from, ellipsis, split) {
  var str1, str2, len1, len2
  if (str.length <= length) {
    return str.toString()
  }
  ellipsis = isUndefined(ellipsis) ? '...' : ellipsis
  switch (from) {
    case 'left':
      str2 = split ? truncateOnWord(str, length, true) : str.slice(str.length - length)
      return ellipsis + str2
    case 'middle':
      len1 = Math.ceil(length / 2)
      len2 = Math.floor(length / 2)
      str1 = split ? truncateOnWord(str, len1) : str.slice(0, len1)
      str2 = split ? truncateOnWord(str, len2, true) : str.slice(str.length - len2)
      return str1 + ellipsis + str2
    default:
      str1 = split ? truncateOnWord(str, length) : str.slice(0, length)
      return str1 + ellipsis
  }
}
