// Heart Button
const hearts = document.getElementsByClassName("heart-btn"); 
const heartCountElement = document.getElementById("heart-count"); 
console.log(heartCountElement)
let heartCount = 0; 

for (const heart of hearts) {
    heart.addEventListener("click", function () {
        /*if(heart.classList.contains("fa-regular")){
            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid", "text-red-500"); 
            heartCount++; 
        } else {
            heart.classList.remove("fa-solid", "text-red-500"); 
            heart.classList.add("fa-regular"); 
            heartCount--; 
        }
        heartCountElement.innerText = heartCount; */
        console.log("click")
        heartCount++; 
        heartCountElement.innerText = heartCount; 

     }); 
}