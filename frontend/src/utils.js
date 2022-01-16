export const convertToMoney = (number) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);


export const convertExpo = (number) =>{
  return Number.parseFloat(number).toFixed(2);
}
