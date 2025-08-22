import request from "supertest";
import app from "../app.js";

describe("Sanity test", () => {
  test("1 should equal 1", () => {
    expect(1).toBe(1);
  });
});

describe("GET /api", () => {
  it("should return a content-type of html", async () => {
    const response = await request(app).get("/api");
    expect(response.type).toBe("text/html");
  });

  it("should return a 200 status code", async () => {
    const response = await request(app).get("/api");
    expect(response.statusCode).toBe(200);
  });

  it("should return html, which contains a specific sentence", async () => {
    const response = await request(app).get("/api");
    expect(response.text).toContain("Choose a pdf to sign");
  });
});
