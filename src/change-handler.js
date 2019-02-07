/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. 
 * This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
               
        if (type === "quarter") {
        this.cashTendered += 25; 
        }
        else if (type === "dime") {
        this.cashTendered += 10; 
        }
        else if (type === "nickel") {
        this.cashTendered += 5; 
        }
        else if (type === "penny") {
        this.cashTendered += 1; 
        }
        
    }
    /*** Returns true if enough coins have been inserted 
    to at least meet the amountDue*/
     
    isPaymentSufficient() {
        if (this.cashTendered >= this.amountDue){
            return true;
        } 
        else {
            return false;
        }
    }
    giveChange() {
        // TODO return the correct change in the following format...

        let change = 0
        let quarterReturned = 0
        let dimeReturned = 0
        let nickelReturned = 0
        let pennyReturned = 0
        change = this.cashTendered - this.amountDue

        while (change > 0) {
            if (change >= 25) {
                quarterReturned++
                change -= 25
            } else if (change >= 10) {
                dimeReturned++
                change -= 10
            } else if (change >= 5){
                nickelReturned++
                change -= 5
            } else (change >= 1) 
                pennyReturned++
                change -= 1
            
        }

        return {
            quarters: quarterReturned,
            dimes: dimeReturned,
            nickels: nickelReturned,
            pennies: pennyReturned
        }
    }
}

const vendingMachine = new ChangeHandler(100)
