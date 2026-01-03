export const formatCurrency = (price: number, currency: 'USD' | 'NGN', exchangeRate: number) => {
  const amount = currency === 'NGN' ? price * exchangeRate : price;
  const symbol = currency === 'NGN' ? '₦' : '$';
  return `${symbol}${amount.toFixed(2)}`;
};

export const debounce = (func: Function, delay: number) => {
  let timeout: NodeJS.Timeout;
  return function(...args: any[]) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};