/*
function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);
*/

function MoneyBox(){
    let savedCoins = 0;
    function addCoins(coins){
        savedCoins += coins;
        console.log(`MoneyBox: $${savedCoins}`);
    }
    return addCoins;
}

const myMoneyBox = MoneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);


