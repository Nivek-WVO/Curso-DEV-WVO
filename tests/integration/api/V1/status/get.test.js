test("GET to /api/V1/status should 200", async () => {
  const response = await fetch("http://localhost:3000/api/V1/status");
  expect(response.status).toBe(200);
});
