export const convertToMoney = (number) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
