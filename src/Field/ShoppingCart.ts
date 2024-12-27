import { Product } from "./Product.js"

export class ShoppingCart {
  productsDomain: Product[] = []

  add = (price: number, quantity = 1) => {
    const product = new Product(price, quantity)
    this.productsDomain.push(product)
  }

  calculateTotalPrice = () => {
    return this.productsDomain.reduce(
      (acc, curr) => acc + curr.calculateTotalPrice(),
      0,
    )
  }

  numberOfProducts = () =>
    this.productsDomain.reduce(
      (quantity, product) => quantity + product.getQuantity(),
      0,
    )

  hasDiscount = () =>
    this.productsDomain.some((product) => product.hasDiscount())
}
