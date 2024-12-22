function calculateTotal(prices: number[]): number {
  let total = 0;
  for (const price of prices) {
    total += price; 
  }
  return total;
}

const prices = [10, 20, '30' as any];
const total = calculateTotal(prices);
console.log(total); //Output: NaN