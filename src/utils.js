export const Utils = {
  /**
   * rgb を16進数に変換する
   * @param {Number} r
   * @param {Number} g
   * @param {Number} b
   * @return {String} ex. '#ff00ff'
   */
  rgbTo16: ( r, g, b ) => {
    const col = `rgb(${r}, ${g}, ${b})`
    return '#' + col.match(/\d+/g).map( a => {
      return ('0' + parseInt(a).toString(16)).slice(-2)
    }).join('')
  }
}