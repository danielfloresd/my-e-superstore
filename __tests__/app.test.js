const request = require("supertest");
const app = require("../app");

describe("app", () => {
  describe("Initializations", () => {
    it("should initialize the server", () => {
      expect(app).toBeDefined();
    });
  });

  describe("GET /api/products", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app).get("/api/products");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET /api/products/:id", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app).get("/api/products/1");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("POST /api/products", () => {
    it("should return a 200 status code", async () => {
      const product = {
        product_name: "Basketball",
        price: 200.0,
        stock: 3,
        tagIds: [1, 2, 3, 4],
      };
      const response = await request(app).post("/api/products").send(product);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("PUT /api/products/:id", () => {
    it("should return a 200 status code", async () => {
      const product = {
        product_name: "Soceer Ball",
        price: 500.0,
        stock: 10,
        tagIds: [1, 2, 3, 4],
      };
      const response = await request(app).put("/api/products/1").send(product);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET /api/tags", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app).get("/api/tags");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET /api/tags/:id", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app).get("/api/tags/1");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("POST /api/tags", () => {
    it("should return a 200 status code", async () => {
      const tag = {
        tag_name: "Test Tag",
      };
      const response = await request(app).post("/api/tags").send(tag);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("PUT /api/tags/:id", () => {
    it("should return a 200 status code", async () => {
      const tag = {
        tag_name: "New Tag",
      };
      const response = await request(app).put("/api/tags/1").send(tag);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET /api/categories", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app).get("/api/categories");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET /api/categories/:id", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app).get("/api/categories/1");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("POST /api/categories", () => {
    it("should return a 200 status code", async () => {
      const category = {
        category_name: "Test Category",
      };
      const response = await request(app)
        .post("/api/categories")
        .send(category);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("PUT /api/categories/:id", () => {
    it("should return a 200 status code", async () => {
      const category = {
        category_name: "New Category T",
      };
      const response = await request(app)
        .put("/api/categories/1")
        .send(category);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("DELETE /api/products/:id", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app).delete("/api/products/1");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("DELETE /api/tags/:id", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app).delete("/api/tags/1");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("DELETE /api/categories/:id", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app).delete("/api/categories/1");
      expect(response.statusCode).toBe(200);
    });
  });
});
