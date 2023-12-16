var clickCount = 0;
let currentIncrementRate = 0;
let incrementInterval = null;

function manualIncrement() {
        clickCount++;
        document.getElementById("clicks").innerHTML = clickCount;
}


function autoIncrement(amount) {
    

 // Update the increment rate
 currentIncrementRate += amount;

 // If there's no interval running, start one
 if (incrementInterval === null) {
     incrementInterval = setInterval(function() {
        clickCount += currentIncrementRate;
         document.getElementById("clicks").textContent = clickCount;
     }, 1000); // Update every second
 }

}