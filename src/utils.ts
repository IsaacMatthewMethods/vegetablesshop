
export const formatCurrency = (price: number, currency: 'USD' | 'NGN', exchangeRate: number) => {
  const amount = currency === 'NGN' ? price * exchangeRate : price;
  const symbol = currency === 'NGN' ? '₦' : '$';
  return `${symbol}${amount.toFixed(2)}`;
};
