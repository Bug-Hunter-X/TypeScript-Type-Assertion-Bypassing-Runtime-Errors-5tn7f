function calculateTotal(prices: number[]): number {
  let total = 0;
  for (const price of prices) {
    total += price; 
  }
  return total;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

const prices = [10, 20, '30' as any];
const validPrices = prices.filter(isNumber);
const total = calculateTotal(validPrices);
console.log(total); // Output: 30