import { Product } from "./Product.js"

export class ShoppingCart {
  products: { price: number; quantity: number }[] = []
  productsDomain: Product[] = []

  add = (price: number, quantity = 1) => {
    const product = new Product(price, quantity)
    this.productsDomain.push(product)

    this.products.push({
      price,
      quantity,
    })
  }

  calculateTotalPrice = () => {
    return this.productsDomain.reduce(
      (acc, curr) => acc + curr.calculateTotalPrice(),
      0,
    )
  }

  numberOfProducts = () =>
    this.products.reduce((quantity, product) => quantity + product.quantity, 0)

  hasDiscount = () =>
    this.productsDomain.some((product) => product.hasDiscount())
}
