const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function batteries() {
  return batteryBatches.reduce((totalBatteries, batteryBatches) => {
    return totalBatteries + batteryBatches;
  }, 0);
}

console.log(batteries());
