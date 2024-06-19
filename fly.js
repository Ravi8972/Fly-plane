const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number of airports: ', (n) => {
  let fuel = [];
  console.log('Enter the units of fuel available at each airport:');
  
  rl.on('line', (line) => {
    fuel = line.split(' ').map(Number);
    let result = minimumPlanes(fuel);
    console.log(`Minimum number of planes required: ${result}`);
    rl.close();
  });
});

function minimumPlanes(fuel) {
  let n = fuel.length;
  let dp = new Array(n).fill(Infinity);
  
  dp[0] = 1; // Start from the first airport
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (j + fuel[j] >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }
  
  return dp[n - 1] === Infinity ? -1 : dp[n - 1];
}
