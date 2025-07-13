const request = require("supertest");
const app = require("../app");

let createdGradeId = "";

describe("Grade API", () => {
  it("should create a new grade", async () => {
    const res = await request(app).post("/api/grades").send({ name: "Grade 10A" });
    expect(res.statusCode).toBe(201); 
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("id");
    createdGradeId = res.body.data.id;
  });

  it("should get all grades", async () => {
    const res = await request(app).get("/api/grades");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true); 
  });

  it("should update the created grade", async () => {
    const res = await request(app)
      .put(`/api/grades/${createdGradeId}`)
      .send({ name: "Grade 10 Updated" });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Grade updated");
  });
});
