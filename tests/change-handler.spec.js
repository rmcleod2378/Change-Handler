// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
    it("amount due ", function() {
        // Remember, you can arrange, act, 
        //and assert...start small
        expect(vendingMachine.amountDue).toBe(100);
    });

    // Amount due based on argument
    // Cash tendered set to 0
    it("cash tendered", function() {
        expect(vendingMachine.cashTendered).toBe(0);
    });

    //Inserting Coins

    it("inserting a quarter", function() {
        vendingMachine.insertCoin("quarter")
        expect(vendingMachine.cashTendered).toBe(25);
    });

    it("inserting a dime", function() {
        vendingMachine.insertCoin("dime")
        expect(vendingMachine.cashTendered).toBe(35);
    });

    it("inserting a nickle", function() {
        vendingMachine.insertCoin("nickel")
        expect(vendingMachine.cashTendered).toBe(40);
    });

    it("inserting a penny", function() {
        vendingMachine.insertCoin("penny")
        expect(vendingMachine.cashTendered).toBe(41);
    });

    // Is payment sufficent

    
    // Give change

});

