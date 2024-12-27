export class Product {
  constructor(
    private readonly price: number,
    private readonly quantity = 1,
  ) {
    this.price = price
    this.quantity = quantity
  }

  getQuantity() {
    return this.quantity
  }

  hasDiscount() {
    return this.price > 100
  }

  calculateTotalPrice() {
    return this.price * this.quantity
  }
}
