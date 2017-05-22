import * as chai from "chai";

describe("My first test class", function() {

    it("should be able to assert that 1 is equal to 1", function(){
        chai.expect(1).to.be.equal(1);
    });
});