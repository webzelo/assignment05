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
        let coins = parseInt(coinCount.textContent); 

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

//Call History
const callButtons = document.querySelectorAll(".call-button"); 
const coinElement = document.getElementById("coin-count"); 
let coins = parseInt(coinElement.innerText); 
const callHistoryContainer = document.getElementById("call-history"); 

for(const btn of callButtons) {
    btn.addEventListener("click", function () {
        if (coins < 20) {
            return; 
        }
        const card = btn.closest(".card"); 
        const serviceName = card.querySelector(".service-name").innerText; 
        const serviceNumber = card.querySelector(".service-number").innerText; 
        const serviceTitle = card.querySelector(".service-title").innerText; 

        alert(`Calling ${serviceName} at ${serviceNumber}`); 

        const historyItem = document.createElement("div"); 

        historyItem.innerHTML = `

            <div class= "flex justify-between items-center bg-[#FFE3E2] shadow-lg shadow-[#CDCECA] p-3 rounded-lg pl-6 pr-6 my-4">
                <div>
                <h3 class= "font-[Inter] font-semibold text-[#111111]">${serviceTitle}</h3>
                <p class = "text-[#5C5C5C] text-[18px]">${serviceNumber}</p>
                </div>
                <p class="text-[18px] text-[#111111]">${new Date().toLocaleTimeString()}</p>
            </div>
        `;
        callHistoryContainer.appendChild(historyItem); 
    });
}

//Clear History
const clearHistory = document.getElementById("clear-history-btn"); 
clearHistory.addEventListener("click", function () {
    callHistoryContainer.innerHTML = ""; 
});