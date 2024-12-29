



const allButtonsElm = document.querySelectorAll(".btn");


let strToDisplay = "";
const displayElm = document.querySelector(".display");


const operators = ["+", "-", "/", "*", "%"];

let  lastOperator = "";

//load the audio 
const audio = new Audio("./assests/error.mp3");

 const buttonAction = (value) => {
    
    displayElm.classList.remove("prank"); 

    if(value === "AC"){
        strToDisplay = "";
        return display(strToDisplay);
    }
     


    if(value === "C"){
        strToDisplay = strToDisplay.slice(0,-1);
       return display(strToDisplay);
    }

    if(value === "=") {

        lastOperator = "";
        // get the last character
         const lastChar = strToDisplay[strToDisplay.length - 1]; 
         //check if it is one of the opreators 
         if(operators.includes(lastChar)){
             strToDisplay = strToDisplay.slice(0,-1);
        }
       
        return displayTotal();
    }

    // show only last clicked operator. 
    if (operators.includes(value)){

        lastOperator = value; 

        //get the last character 
        const lastChar =  strToDisplay[strToDisplay.length - 1];
       
        //check if the is one of the operators. 
        if (operators.includes(lastChar)){
            strToDisplay = strToDisplay.slice(0,-1);
        }

    }


    // handle the dot ciclk
    if (value === ". ") {
        const lastOperatorIndex =  strToDisplay.
        lastIndexOf(lastOperator);

        const lastNumberSet = strToDisplay.slice(lastOperatorIndex);

        if (lastNumberSet.includes(".")){
            return;
        }

        if( !lastOperator && strToDisplay.includes(".")){
            return; 
        }
    }

    strToDisplay += value;

    display(strToDisplay);
 };



// attaching click event to all the buttons. 
allButtonsElm.forEach(
(btn) => {
    btn.addEventListener("mousedown", ()=> {
        btn.style.scale = ".9";
    });


    btn.addEventListener("click", () =>{ 
        btn.style.scale = "1";
        const value = btn.innerText; 
        buttonAction(value);
      });
    });


    //update clicked value button value to display area 
    const display =  (str) => {
        displayElm.innerText = str ||  "0.0" ;
    };


    // calculate total 
    const displayTotal  = () => {

        const extraValue = randomValue();

        if (extraValue){
            displayElm.classList.add("prank"); 
            audio.play();
        }
         const total =  eval(strToDisplay) + extraValue ;

         strToDisplay = total.toString();
         display(strToDisplay);
    };


    const randomValue = () => {
        const num = Math.round(Math.random() * 10);
        return num < 6? num : 0;
     };
    