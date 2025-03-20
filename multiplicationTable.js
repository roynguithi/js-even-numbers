//Define the range of the multiplication table
let maxNumber = 10;
//Outer loop iterates over each number(1 to maxNumber)
for (let i = 1;i <= maxNumber; i++) {
    let row = "";//initialize an empty string for each row
    //inner loop calculates the product for the current number
    for (let j = 1; j <= maxNumber; j++) {
        row += (i * j).toString().padStart(4, "");//format numbers for alignment
    }
    console.log(row);//print each row
}