export class ShoppingCart {
  products: { price: number; quantity: number }[] = []

  add = (price: number, quantity = 1) => {
    this.products.push({
      price,
      quantity,
    })
  }

  calculateTotalPrice = () =>
    this.products.reduce(
      (price, product) => price + product.price * product.quantity,
      0,
    )

  numberOfProducts = () =>
    this.products.reduce((quantity, product) => quantity + product.quantity, 0)

  hasDiscount = () => this.products.some((product) => product.price > 100)
}
