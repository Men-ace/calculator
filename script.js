



const allButtonsElm = document.querySelectorAll(".btn");


let strToDisplay = "";
const displayElm = document.querySelector(".display");

 const buttonAction = (value) => {
    console.log(value); 


    if(value === "AC"){
        strToDisplay = "";
        return display(strToDisplay);
    }

    strToDisplay += value;

    display(strToDisplay);
 }

// attaching click event to all the buttons. 
allButtonsElm.forEach(
(btn) => {
    btn.addEventListener("click", () =>{ 
        const value = btn.innerText; 
        buttonAction(value);
      });
    });


    //update clicked value button value to display area 
    const display =  (str) => {
        displayElm.innerText = str ||  "0.0" ;
    };