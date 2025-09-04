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
const callbtn = document.querySelectorAll(".call-button"); 
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

//start copy count section
//reusable function

function setupCopyButton(buttonId, textId) {
    const button = document.getElementById(buttonId); 
    const textElement = document.getElementById(textId); 

    if(button && textElement) {
        button.addEventListener("click", () => {
            const textToCopy = textElement.innerText; 
            navigator.clipboard
                .writeText(textToCopy)
                .then(() => {
                    alert("Copied To Clipboard : " + textToCopy); 
                })
                .catch((err) => {
                    console.error("Failed To Copy: ", err); 
                })
        })
    }
}

//List Of Buttons And Text Ids
const copyMappings = [
    ["copy-button-national", "NationalEmergency"], 
    ["copy-button-police", "PoliceEmergency"], 
    ["copy-button-fire", "FireEmergency"], 
    ["copy-button-ambulance", "AmbulanceEmergency"], 
    ["copy-button-women-child", "WomenChildEmergency"], 
    ["copy-button-anti-corruption", "AntiCorruptionEmergency"], 
    ["copy-button-electricity", "ElectricityEmergency"], 
    ["copy-button-brac", "BracEmergency"], 
    ["copy-button-bangladesh-railway", "BangladeshRailwayEmergency"], 
    ["copy-button-police", "PoliceEmergency"], 
    ["copy-button-police", "PoliceEmergency"], 
]; 

//Loop Through Mappings
copyMappings.forEach(([btnId, textId]) => setupCopyButton(btnId, textId)); 

