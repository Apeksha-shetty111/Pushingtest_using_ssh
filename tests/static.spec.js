import { test, except, expect } from "@playwright/test";
import objectdata from "../jason/test.json"

test("test using static data", async function ({ request }) {
  const response = await request.post("/objects", {
    data:objectdata
  });

  console.log(await response.json());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200)
  const responsebody=await response.json()
  expect(responsebody).toHaveProperty("name","Apple iPhone 12 Pro Max")


});