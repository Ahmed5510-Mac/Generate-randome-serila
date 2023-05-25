/*-------------------steps --------------------
 [1] set characters to generate the serial;
 [2] set serial characters count
 [3] create empty variable to stor the serial
 [4] create random  Number + Access sequence
 [5] stor the randome Eleement in the empty variable
 [6] loop x count 
 [7] change serila Element  count with the serila variable
 */
// -----------------variable---------------------
let randomSerialElement=document.querySelector(".serial");
let button = document.querySelector(".generate");
let characters="12356789abcdefghilklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charCount=10;
let randomSerial=""
// -----------------code---------------------
button.addEventListener("click",() => {
   randomSerial="";
    for (let i=0; i<charCount; i++){
        randomSerial += characters[Math.floor(Math.random() * characters.length)]
    }
randomSerialElement.innerHTML = randomSerial
})