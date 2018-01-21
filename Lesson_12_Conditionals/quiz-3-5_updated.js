/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -5.00;
var checkBalance = true;
var isActive = true;

if (checkBalance) {
    if (!isActive) {
        console.log("Your account is no longer active.");
    } if (balance > 0) {
            console.log("Your balance is $" + balance + ".");
    } else if (balance === 0) {
            console.log("Your account is empty.");
    } else (balance < 0) {
            console.log("Your balance is negative. Please contact bank.");
    }
} else { console.log("Thank you. Have a nice day!");
  }
