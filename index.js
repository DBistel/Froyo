const userInput = prompt(
  "Please enter flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
typeof userInput === "string" //check to make sure input is a string not an int
const flavors = userInput.split(","); // recognizes comma as a delimiter to separate in array

const flavorCount = (arr) => {
    const obj = {};
    for (const flavor of arr){
        if (flavor in obj){
            obj [flavor] += 1;
        } else {
            obj [flavor] = 1;
        }
        
    }
    return obj;
};

 console.table(flavorCount(flavors));








