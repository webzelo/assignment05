// Heart Button
const hearts = document.querySelectorAll(".heart-btn"); 
const heartCountElement = document.getElementById("heart-count"); 
console.log(heartCountElement)
let heartCount = 0; 

for (const heart of hearts) {
    heart.addEventListener("click", function () {
        if(heart.classList.contains("fa-regular")){
            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid", "text-red-500"); 
            heartCount++; 
        } else {
            heart.classList.remove("fa-solid", "text-red-500"); 
            heart.classList.add("fa-regular"); 
            heartCount--; 
        }
        heartCountElement.innerText = heartCount; 
        console.log("click")
        heartCount++; 
        heartCountElement.innerText = heartCount; 

     }); 
}

//copy button
const copybtn = document.querySelectorAll(".copy-button"); 
const copyCount = document.getElementById("copy-count"); 
let copyCounter = 0; 

copybtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        copyCounter++; 
        copyCount.textContent = copyCounter; 
    }); 
}); 

//coin button
const callbtn = document.querySelectorAll("call-button"); 
const coinCount = document.getElementById("coin-count"); 

callbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let coins = parseInt(cointCount.textContent); 

        if (coins >= 20) {
            coins -= 20; 
            coinCount.textContent = coins; 
        } else{
            alert("!You Need 20 Coin For A Call");
        }
    });
});
