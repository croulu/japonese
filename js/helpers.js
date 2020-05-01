function nextRandom (number) {
  const iRandom = getRandomInt(number)
  return iRandom
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function fnCall (fn, ...args) {
  const func = (typeof fn === 'string') ? window[fn] : fn
  if (typeof func === 'function') func(...args)
  else throw new Error(`${fn} is Not a function!`)
}

function strUcFirst (a) {
  return (a + '').charAt(0).toUpperCase() + a.substr(1)
}

function strReplaceAll (myString, stringToReplace, stringToUse) {
  return myString.replace(new RegExp(stringToReplace, 'g'), stringToUse)
}

export {
  nextRandom,
  strUcFirst,
  strReplaceAll
}
