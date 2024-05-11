{
    class BankAccount {
        public id: number;
        public name: string;
        protected _balance: number
        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance
        }
        set Deposit(amount: number) {
            this._balance = this._balance + amount
        }
        get Balance() {
            return this._balance
        }
    }
    const myBankAccount = new BankAccount(1, "Md Abdur Razzak", 20001);
    myBankAccount.Deposit= 1000;
    const myBalance = myBankAccount.Balance;
    console.log(myBalance);
}