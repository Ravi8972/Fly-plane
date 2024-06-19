
function minPlanesToDestination(fuelArray) {
    const n = fuelArray.length;
    if (n === 1) {
        return 0; // No planes needed if there's only one airport
    }

    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < n; i++) {
        // Farthest we can reach from this airport
        farthest = Math.max(farthest, i + fuelArray[i]);

        // If we have reached the end of the current plane's range
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;

            // If currentEnd is beyond or at the last airport
            if (currentEnd >= n - 1) {
                return jumps;
            }
        }

        // If we are stuck at a position where we can't move forward
        if (i === farthest) {
            return -1;
        }
    }

    return -1; // Exit the loop without finding a solution
}

function main() {
    const prompt = require('prompt-sync')();
    const arraySize = parseInt(prompt("Enter the number of airports: "));
    const arr = [];
    
    for (let i = 0; i < arraySize; i++) {
        arr.push(parseInt(prompt(Enter fuel capacity for airport ${i + 1}: )));
    }
   
    console.log("Minimum planes needed: " + minPlanesToDestination(arr));
}

main();
