// test dummy
test("test dummy", () => {
  expect(2 + 2).toBe(4);
});
const supertest = require("supertest");
// server start when it's required in, due to the if statement in index.js
const server = require("../index");

// because we are working with promises use async code
test("GET /, get request", async () => {
  // almost like axios, can use .get(url)
  //   const res = await supertest(server).get("/");

  // ARRANGE
  const endpoint = "/";
  const status = 200;

  // ACT on whatever we're testing
  const res = await supertest(server).get("/");

  // ASSERT
  expect(res.statusCode).toBe(status);
  // shorthand for res.headers["content-type"]
  expect(res.type).toBe("application/json");
  expect(res.body.message).toBe("Types of Songs List");
});
