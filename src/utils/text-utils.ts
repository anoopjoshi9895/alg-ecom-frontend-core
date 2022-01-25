import { default as numberFormat } from 'number-with-commas'

export const capitalizeFirstLetter = (text: string) => {
  if (!text) {
    return text
  }
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const capitalizeAllFirstLettersOfWords = (text: string) => {
  if (!text) {
    return text
  }
  return text.split(' ').map(capitalizeFirstLetter).join(' ')
}

export const numberWithCommas = (x: number | string) => {
  // let value=
  if (x === undefined) {
    return ''
  }
  if (typeof x === 'string') {
    return numberFormat(parseFloat(x))
  }
  return numberFormat(x)
  // return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
