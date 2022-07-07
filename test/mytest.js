const request = require("supertest");
const app = require("../index");

describe("GET / (root)", ()=>{
    it("respond with Hello Node World", (done)=>{
        request(app).get("/").expect("Hello Node World !", done);
    });
});