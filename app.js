//BEST TIME TO BUY AND SELL STOCK
function bttbass(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price
        } else if (price - minPrice > maxProfit){
            maxProfit = price - minPrice
        }
    }
    return maxProfit
}




//BEST TIME TO BUY AND SELL STOCK 2



//EXCEL SHEET COLUMN NUMBER