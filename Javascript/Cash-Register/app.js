function checkCashRegister(price, cash, cid) {
    var changeDue = cash - price;
    var change = [];
    var totalCid = 0;
  
    // Calculate total cash in drawer
    for (var i = 0; i < cid.length; i++) {
      totalCid += cid[i][1];
    }
  
    // Check if cash in drawer is less than change due
    if (totalCid < changeDue) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    // Check if cash in drawer is equal to change due
    if (totalCid === changeDue) {
      return {status: "CLOSED", change: cid};
    }
  
    // Calculate change in coins and bills
    var currencyValues = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    }
  
    for (var i = cid.length - 1; i >= 0; i--) {
      var currencyName = cid[i][0];
      var currencyValue = currencyValues[currencyName];
      var currencyAmount = cid[i][1];
  
      // Check if current currency can be used to make change
      if (changeDue >= currencyValue && currencyAmount > 0) {
        var amount = 0;
        while (changeDue >= currencyValue && currencyAmount > 0) {
          changeDue -= currencyValue;
          changeDue = Math.round(changeDue * 100) / 100;
          currencyAmount -= currencyValue;
          amount += currencyValue;
        }
        change.push([currencyName, amount]);
      }
    }
  
    // Check if exact change cannot be made
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    return {status: "OPEN", change: change};
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);