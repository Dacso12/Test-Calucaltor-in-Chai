import { expect } from "chai";
import caluclator from "./caluclator.js";

describe("Verification of Calcualtor Functionality", function(){
    it('Verify add 2 numbers funcionlatiy', function() {
        expect(caluclator.add(10,1)).to.equal(11)
    })
    it('Verify substract  funcionlatiy', function() {
        expect(caluclator.subsctreact(7,5)).to.equal(2)
    })
    it('Verify multiply  funcionlatiy', function() {
        expect(caluclator.multiply(7,5)).to.equal(35)
    })
    it('Verify divide  funcionlatiy', function() {
        expect(caluclator.divide(35,5)).to.equal(7)
    })
    it('Verify divide  funcionlatiy', function() {
        expect(caluclator.divide(3,0)).to.equal("Cannot divide by zero")
    })
    it('Verify Even', function() {
        expect(caluclator.isEven(5)).to.equal(false)
    })
    it('Verify Even', function() {
        expect(caluclator.isEven(10)).to.equal(true)
    })
    it('Verify the string frist letter', function() {
        expect(caluclator.capitalize("String")).to.equal("String")
    })
    
    
}
)