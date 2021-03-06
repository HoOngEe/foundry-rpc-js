import { call } from "../src";
import "mocha";
import { expect } from "chai";

describe("call", () => {
    it("ping", async () => {
        const response = await call({
            node: "http://localhost:8080",
            method: "ping"
        });
        const result = JSON.parse(response);
        expect(result.jsonrpc).equal("2.0");
        expect(result.result).equal("pong");
        expect(result.id).be.null;
    });

    it("ping with number id", async () => {
        const id = Math.floor(Math.random() * 1000);
        const response = await call({
            node: "http://localhost:8080",
            method: "ping",
            id
        });
        const result = JSON.parse(response);
        expect(result.jsonrpc).equal("2.0");
        expect(result.result).equal("pong");
        expect(result.id).equal(id);
    });

    it("ping with string id", async () => {
        const id = "string id";
        const response = await call({
            node: "http://localhost:8080",
            method: "ping",
            id
        });
        const result = JSON.parse(response);
        expect(result.jsonrpc).equal("2.0");
        expect(result.result).equal("pong");
        expect(result.id).equal(id);
    });
});
