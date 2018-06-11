function Phone(brand, price, color,ram, ossystem) {
	this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
	this.ossystem=ossystem;
	this.ram=ram;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand  + " ,price is " + this.price + ", color " + this.color +  ", RAM " + this.ram + " ,operating system " + this.ossystem + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver",2,"IOS10");
var GalaxyS6 = new Phone("Samsung", 1250, "black",1,"Android");
var OnePlusOne = new Phone("One", 1800, "pink",3,"Android");
var NokiaLumia = new Phone("Nokie", 1700, "grey",1.5,"Windows");
iPhone6S.printInfo();
GalaxyS6.printInfo();
OnePlusOne.printInfo();
NokiaLumia.printInfo();