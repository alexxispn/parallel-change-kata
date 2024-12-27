import { ShoppingCart } from "../src/Field/ShoppingCart.js"
import { describe, it, expect, beforeEach } from "vitest"

describe("shopping cart", () => {
  let cart: ShoppingCart
  beforeEach(() => {
    cart = new ShoppingCart()
  })

  it("calculates the final price", () => {
    cart.add(10)

    expect(cart.calculateTotalPrice()).toBe(10)
  })

  it("knows the number of items", () => {
    cart.add(10)

    expect(cart.numberOfProducts()).toBe(1)
  })

  it("may offer discounts when there is at least one expensive product", () => {
    cart.add(120)

    expect(cart.hasDiscount()).toBeTruthy()
  })

  it("does not offer discount for cheap products", () => {
    cart.add(10)

    expect(cart.hasDiscount()).toBeFalsy()
  })

  it("allows adding more than one item at the same time and checks quantities", () => {
    cart.add(10, 2)
    expect(cart.numberOfProducts()).toBe(2)
  })

  it("allows adding more than one item at the same time and checks prices", () => {
    cart.add(10, 2)
    expect(cart.calculateTotalPrice()).toBe(20)
  })
})
