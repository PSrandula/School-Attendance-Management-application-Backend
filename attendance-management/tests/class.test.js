const request = require("supertest");
const app = require("../app");

let gradeId = "";
let classId = "";

beforeAll(async () => {
  const res = await request(app).post("/api/grades").send({ name: "Grade 11B" });
  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty("data");
  gradeId = res.body.data.id;
});

describe("Class API", () => {
  it("should create a class under a grade", async () => {
    const res = await request(app)
      .post(`/api/classes/${gradeId}`)
      .send({ name: "Class A" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id"); 
    classId = res.body.id;
  });

  it("should get classes for a grade", async () => {
    const res = await request(app).get(`/api/classes/${gradeId}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
