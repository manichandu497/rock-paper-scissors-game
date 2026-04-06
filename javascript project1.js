let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#computer-score");
const draw = () =>{
    console.log("It's a draw");
    msg.innerText = "It's a draw 😅";
    msg.style.backgroundColor = "#081b31";
}

const gencomputerchoice =()=>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}
const playGame = (userchoice) => {
    console.log("user choice is:",userchoice);
    // generate computer choice
    const computerchoice =gencomputerchoice();
    console.log("computer choice is :",computerchoice);

    if(userchoice === computerchoice){
        draw();
    }
    else{
        if((userchoice === "rock" && computerchoice === "scissors") || (userchoice === "paper" && computerchoice === "rock") || (userchoice === "scissors" && computerchoice === "paper")){
            userscore++;
            console.log("YOU WON");
            msg.innerText =`YOU WON 🥳🎉 your ${userchoice} beats ${computerchoice}`;
            msg.style.backgroundColor = "green";
            userScore.innerText = userscore;
        }
        else{
            compscore++;
            console.log("SORRY, YOU LOST");
            msg.innerText =`SORRY, YOU LOST 😢 ${computerchoice} beats your ${userchoice}`;
            msg.style.backgroundColor = "red";
            compScore.innerText = compscore;
        }
    }
}

choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});