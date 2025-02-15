function createBankAccount(initialBalance){
    let balance= initialBalance;   
    return {
        deposit: function (amount){
            balance= balance+amount;
            return balance;
        },
        withDraw :function (amount){
            return balance>=amount? balance= balance-amount: "Insufficient balance";
        },
        getBalance: function(){
            return balance;
        },
    }    
}
const account = createBankAccount(100);

console.log(account.deposit(50));

console.log(account.withDraw(30)); 

console.log(account.getBalance()); 