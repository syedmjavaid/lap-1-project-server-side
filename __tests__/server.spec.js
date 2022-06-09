const app = require("../server");
const request = require("supertest");
const { json } = require("express/lib/response");

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

  test('should return error code 404 from server', () => {
    return request(app)
    .get('/')
    .expect(200)
    .then((res) => {
      expect(res.status).toBe(404)
    })
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
  it("GET /:id should return the expected object id", async () => {
    const response = await request(app).get("/1");
    console.log(response.body.id);
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

  test('should return ', () => {
    
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

describe('models testing', () => {
  test('should ', () => {
    
  });
  
});
