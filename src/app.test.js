const app = require("./app");
const supertest = require("Supertest")
const request = supertest(app)

describe("/test endpoint", () => {
	it("powinna zwrócić się odpowiedź", async () => {
	const response = await reguest.get("./test)
	expect(response.status).toBe(200);
	expect(response.test).toBe("Hello World");
})

})
