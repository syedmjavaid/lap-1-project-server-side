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

describe("GET /:id", () => {
  // test.only("200: Responds with correct ID", () => {
  //   return request(app)
  //     .get("/1")
  //     .expect(200)
  //     .then((res) => {
  //       console.log(res.body.id);
  //       expect(res.body.id).toBe(1);
  //     });
  // });
  it("GET /:id", async () => {
    const response = await request(app).get("/1");
    console.log(response.body.id);
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });
  test("404: Responds with not found message", () => {
    return request(app)
      .get("/99999")
      .expect(404)
      .then((res) => {
        expect(res.body.msg).toBe("404 Not Found");
      });
  });
});
