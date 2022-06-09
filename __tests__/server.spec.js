const app = require("../server");
const request = require("supertest");
const { json, jsonp } = require("express/lib/response");
const { fetchAll } = require("../models/post");

describe('Server.js', () => {

  it('should return 404 error code', async () => {
    const response = await request(app).post("/");
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({"msg": "404 Not Found"});
  });
  
});

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

  it("GET /:id should return the expected object id", async () => {
    const response = await request(app).get("/1");
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });
  // test("404: Responds with not found message", () => {
  //   return request(app)
  //     .get("/99999")
  //     .expect(404)
  //     .then((res) => {
  //       expect(res.body.msg).toBe("404 Not Found");
  //     });
  // });
});

describe('testing models', () => {
  test('should return 200 for fetchAll', () => {
    return request(app)
    .get('/')
    .expect(200)
    .then((res) => {
      expect(res.status).toBe(200);
    });
  });

  test('should have status 200 and return an array of objects ', () => {
    return request(app)
    .get('/')
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Array)
    })
  });

  test('should return status 200 for getting replies to individual ids', () => {
    return request(app)
    .get('/:id/replies')
    .expect(200)
    .then((res) => {
      expect(res.statusCode).toBe(200)
    })
  });
  
});
