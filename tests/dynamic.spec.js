import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const randomProductName=faker.commerce.productName()

test("check dynamically",async function ({request}) {
    const requestData = {
        name:randomProductName,
        data:{color:"red",'capacity GB': 512}
    }

    const response=await request.post("/objects",
        {
            data: requestData
        }
    )

    console.log(await response.json())
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(201)
    const responseBody=await response.json();
    expect(responseBody).toHaveProperty("name")

})
