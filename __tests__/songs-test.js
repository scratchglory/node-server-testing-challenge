const supertest = require("supertest");
const server = require("../index");

describe("GET /songs", () => {
  it("gets all the songs", async () => {
    const res = await supertest(server).get("/songs");

    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
    expect(res.body).toHaveLength(4);
  });
});
