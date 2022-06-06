const app = require("../server");
const request = require("supertest");

describe("GET /", () => {
  test("200: Responds with an array of messages", () => {
    return request(app)
      .get("/")
      .expect(200)
      .then((res) => {
        expect(res.body).toBeInstanceOf(Array);
        res.body.forEach((message) => {
          id: expect.any(Number);
          time: expect.any(Number);
          text: expect.any(String);
        });
      });
  });
});
