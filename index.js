const userInput = prompt(
  "Please enter flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
typeof userInput === "string" //check to make sure input is a string not an int
const flavors = userInput.split(","); // recognizes comma as a delimiter to separate in array

function flavorCount (arr){
    const flavors = {};
    for (const num of arr){
        if (num in flavors){
            return true;
        }
        flavors[num] = num;
    }
    return false;
};







