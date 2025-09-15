// Distance Converter Script
// 1 mile - 1.60934 kilometers

//Ask user for distance in miles
let miles = prompt("Enter distance in miles :");

//Convert input to number
miles = Number(miles);

//Check if input is valid
if (isNaN(miles) || miles < 0) {
    alert (" Invalid input . Please enter a positive number");
} else {
    //Conversion formula
    const kilometers = miles * 1.60934;

    //Display result
    alert (miles + "miles is equal to " + kilometers. toFixed(2) + "kilometers.");
}