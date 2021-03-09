const request = require("supertest");

const app = require("./index.js");

describe("Get endpoint", () => {
  it("should return get", async () => {
    const res = await request(app).get("/");
    expect(res.body.message).toEqual("Hello from my node app!");
  });
});

describe("Post endpoint", () => {
  it("should return post", async () => {
    const res = await request(app).post("/");
    expect(res.body.message).toEqual("Wow! You did a POST!");
  });
});

describe("Put endpoint", () => {
  it("should return put", async () => {
    const res = await request(app).put("/");
    expect(res.body.message).toEqual("PUT");
  });
});

describe("Delete endpoint", () => {
  it("should return delete", async () => {
    const res = await request(app).delete("/");

    expect(res.body.message).toEqual("Deleting ...");
  });
});
