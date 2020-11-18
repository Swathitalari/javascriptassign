class Customer{
id;
name;
account;
constructor(id,name,account)
{
this.id=id;
this.name=name;
this.account=account;
}
toString()
{
let text=this.id+" "+this.name+" "+this.account;
return text;
}
}
class Account extends Customer
{
balance;
constructor(id,name,account,balance)
{
super(id,name,account);
this.balance=balance;
}
toString()
{
let text=this.id+" "+this.name+" "+this.account+" "+this.balance;
return text;
}
}
let customer1=new Account(1,'swathi','savings',200);
console.log("customer ="+customer1.id+" "+customer1.name+" "+customer1.account+" "+" "+customer1.balance);
let customerText=customer1.toString();
//console.log("customer1 text= "+customerText);
let customer2=new Customer(2,'jyothi','savings',300);
console.log("customer ="+customer2.id+" "+customer2.name+" "+customer2.account+" "+" "+customer2.balance);
let customerdata=customer2.toString();