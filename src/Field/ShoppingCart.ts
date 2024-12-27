import { Product } from "./Product.js"

export class ShoppingCart {
  productsDomain: Product[] = []

  add = (price: number, quantity = 1) => {
    this.productsDomain.push(new Product(price, quantity))
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
