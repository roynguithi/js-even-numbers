//define the number of rows for the multiplication of the triangle
let n = 5;
//Outer loop iterates through each row from 1 to n
for (let i = 1; i <= n; i++) {
    let row = "";//Initialize an empty string to store row content
    //Inner loop iterates through each column in the current row
    for (let j = 1; j <= i; j++){
        // Multiply 'i' and 'j', convert the result to a string, and format it with padStart(4, " ")
        // This ensures proper alignment of numbers for better readability
        row += (i * j).toString().padStart(4, " ");
    }
    console.log(row);
}