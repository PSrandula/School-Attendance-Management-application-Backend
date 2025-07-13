const request = require("supertest");
const app = require("../app");

let gradeId = "";
let classId = "";
let studentId = "";

beforeAll(async () => {
  const gradeRes = await request(app).post("/api/grades").send({ name: "Grade 12" });
  expect(gradeRes.statusCode).toBe(201);
  expect(gradeRes.body).toHaveProperty("data");
  gradeId = gradeRes.body.data.id;

  const classRes = await request(app).post(`/api/classes/${gradeId}`).send({ name: "Class Z" });
  expect(classRes.statusCode).toBe(201);
  classId = classRes.body.id;
});

describe("Student API", () => {
  it("should create a student under a class", async () => {
    const res = await request(app)
      .post(`/api/students/${gradeId}/${classId}`)
      .send({ name: "Kasun", age: 16 });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    studentId = res.body.id;
  });

  it("should get students under class", async () => {
    const res = await request(app).get(`/api/students/${gradeId}/${classId}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
