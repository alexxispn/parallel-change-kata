export class ShoppingCart {
  prices: number[] = []

  add = (price: number) => {
    this.prices.push(price)
  }

  calculateTotalPrice = () => this.prices.reduce((acc, curr) => acc + curr, 0)

  numberOfProducts = () => this.prices.length

  hasDiscount = () => this.calculateTotalPrice() > 100
}
