const Product = require("../models/Product");
//
describe("Product", () => {
  describe("Product model", () => {
    test("should have the correct properties", () => {
      const product = new Product();
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("product_name");
      expect(product).toHaveProperty("price");
      expect(product).toHaveProperty("stock");
      expect(product).toHaveProperty("category_id");
    });
  });
});
