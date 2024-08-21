let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerO

const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
       //console.log("Box was Clicked");
       if (turnO) { // turnO means player O
         box.innerText = "Nio";
         turnO = false;
       } else {
         box.innerText = "Smith"; // player X
         turnO = true;
       }
       box.disabled = true;

       checkWinner();
    });
});
const resetGame = ()=>{
    turnO =true;
    enabledBoxs();
    msgContainer.classList.add("hide");
}

const enabledBoxs = ()=>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}

const disabledBoxs = ()=>{
    for(let box of boxs){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
  msg.innerText = `Congratulations, winner is ${winner}.`;
  msgContainer.classList.remove("hide");
  disabledBoxs();
};

const checkWinner = () =>{
    for( let pattern of winPatterns){
        //console.log(pattern);
        let pos1Val = boxs[pattern[0]].innerText;
        let pos2Val = boxs[pattern[1]].innerText;
        let pos3Val = boxs[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val ){
                //console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

                                // Thanks For Visiting.