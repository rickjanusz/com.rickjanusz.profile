import React from 'react'

function formatTime(time) {
  let d = time
  // d 00-00-0000 00:00
  let e = d.split(' ')
  // e [00-00-0000, 00:00]
  let f = e[1].split(':')
  // f [00, 00]
  // console.log(f)
  if (f[0] > 12) {
    //console.log(f[0])
    if (f[0] > 13) {
      let g = f[0] - 12
      let h = g + ':' + f[1] + ' pm'
      return h
    } else if (f[0] > 24) {
      let i = e[1] + ' am'
      return i
    } else {
      let j = e[1] + ' pm'
      return j
    }
    // console.log('YES')
  } else {
    // console.log('NO')
    return e[1] + ' am'
  }
}

export default formatTime
