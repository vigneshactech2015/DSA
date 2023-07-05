function findGCD(a, b) {
  // Ensure positive values
  a = Math.abs(a);
  b = Math.abs(b);

  // Base case: if b is 0, return a
  if (b === 0) {
    return a;
  }

  // Recursive case: call the function with b and the remainder of a divided by b
  return findGCD(b, a % b);
}

function findLCM(a, b) {
  // Ensure positive values
  a = Math.abs(a);
  b = Math.abs(b);

  // Calculate the LCM using the formula: LCM = (a * b) / GCD(a, b)
  const gcd = findGCD(a, b);
  const lcm = (a * b) / gcd;

  return lcm;
}

// Example usage:
const num1 = 24;
const num2 = 36;
const lcm = findLCM(num1, num2);
console.log("LCM:", lcm);
