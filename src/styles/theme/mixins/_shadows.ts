export const boxShadowXS = (color = 'rgba(0, 0, 0, 0.1)', inset = false) => {
  return `box-shadow: ${inset ? 'inset' : ''} 0px 0.5px 1px ${color};`
}
export const boxShadowSM = (color = 'rgba(0, 0, 0, 0.8)', inset = false) => {
  return `box-shadow: ${inset ? 'inset' : ''} 0px 1px 4px ${color};`
}
export const boxShadowMD = (color = 'rgba(0, 0, 0, 0.6)', inset = false) => {
  return `box-shadow: ${inset ? 'inset' : ''} 0px 4px 8px ${color};`
}
export const boxShadowLG = (color = 'rgba(0, 0, 0, 0.6)', inset = false) => {
  return `box-shadow: ${inset ? 'inset' : ''} 0px 6px 20px ${color};`
}
export const boxShadowXL = (color = 'rgba(0, 0, 0, 0.6)', inset = false) => {
  return `box-shadow: ${inset ? 'inset' : ''} 0px 15px 15px ${color};`
}
export const boxShadowXLRight = (
  color = 'rgba(0, 0, 0, 0.6)',
  inset = false
) => {
  return `box-shadow: ${inset ? 'inset' : ''} -15px 0px 15px ${color};`
}
export const boxShadow2XL = (color = 'rgba(0, 0, 0, 0.6)', inset = false) => {
  return `box-shadow: ${inset ? 'inset' : ''} 0px 30px 30px ${color};`
}

/************ */

// exemple full
// const boxShadowFun = (
//   top: number,
//   left: number,
//   blur: number,
//   color: string,
//   inset = false
// ) => {
//   return `box-shadow: ${
//     inset ? 'inset' : ''
//   } ${top}px ${left}px ${blur}px ${color};`
// }

// usage
// ${boxShadowMixinFunc(0, 0, 4, 'rgba(0, 0, 0, 0.5)')}
