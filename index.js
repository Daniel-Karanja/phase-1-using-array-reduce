const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function batteries() {
  let totalBatteries = 0;
  return batteryBatches.reduce((totalBatteries, batteryBatches) => {
    return totalBatteries + batteryBatches;
  });
}

console.log(batteries());
