const methodsAPI = require("./apiMethods");
const url = require("../index");

// describe("methodsAPI", () => {
//   const obj = { title: "test", desc: "descTest" };

//   let url;

// describe("GET request", () => {
test("should return expected response from URL", async () => {
  const response = await methodsAPI("GET", url);
  // const data = await response.json();
  expect(typeof response).toBe(Array);
});

test("handles errors gracefully", async () => {
  const response = await methodsAPI("GET", url);
  expect(response).toHaveProperty("error");
});
// });
// });
