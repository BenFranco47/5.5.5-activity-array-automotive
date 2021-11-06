/* Step 1-Import VechicleBaseClass.js */
import Vehicle from "./vehicleBaseClass";

/* Step 2- Create a Car class */
class Car extends Vehicle {
    constructor(make, model, year, color, mileage)
{
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.maxPassengers = 0;
    this.numberOfWheels= 4
    this.maxSpeed = 160;
    this.fuel = 10;
    this.fuel = 10;
    this.scheduleService = false;

}

/*Creating methods*/
    start() {
        if (this.fuel > 0) {
            console.log('Engine has started');
        }
        else {
            return this.started = false; 
            
        }
    }

    loadPassenger(num) {
        if(this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            }
            else {
                console.log(this.model + " " + this.nake + " I'm sorry, There is not enough space to load all passengers.");
            }
            }
            else {
                console.log(this.model + " " + this.make + " I am full");
            }
        }
        scheduleService(mileage) {
            if(this.mileage > 30000) {
                this.scheduleService === true
                return this.scheduleService;
            }
        }
    }

    


//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

