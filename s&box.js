const win = new Audio('a-win.mp3');
const bloop = new Audio('a-bloop.mp3');



function gameStart(){
    let startGameStyles = {
        "margin-top": "0",
        "opacity": "0",
        "cursor": "default",
        "font-size": "24pt"
    };
    let titleSlideStyles = {
        "opacity": "1",
        "margin": "0"
    };
    let sliderSlideStyles = {
        "margin-top": "100px",
        "cursor": "pointer",
        "opacity": "1"
    };
    let selectedNumStyle = {
        "opacity": "1",
        "margin-top": "40px"
    };
    let guessButtonSlide = {
        "margin-top": "24px",
        "opacity": "1",
    };

    const startSlide = document.getElementById('buttonStart');
    Object.assign(startSlide.style, startGameStyles);

    const titleSlide = document.getElementById('title');
    Object.assign(titleSlide.style, titleSlideStyles);

    const gameSlide = document.getElementById('sliderContainer');
    Object.assign(gameSlide.style, sliderSlideStyles);

    const numSlide = document.getElementById('selectedNum');
    Object.assign(numSlide.style, selectedNumStyle);

    const buttonSlide = document.getElementById('containerForButton');
    Object.assign(buttonSlide.style, guessButtonSlide);

    
}



// 


function setRanNum(){
    x = parseInt(Math.random()*101);
    // document.getElementById('demo').innerHTML = x;
};

function guessNum(){    
    let guessedNum = parseInt(document.getElementById('mySlider').value);

    let attempts = parseInt(document.getElementById('score').innerHTML);
    attempts = attempts + 1
    document.getElementById('score').innerHTML = attempts;
    
    if (x > guessedNum){
        document.getElementById('attemptResult').innerHTML = "Too Low!"
        bloop.cloneNode(true).play();
    } else if (x < guessedNum){
        document.getElementById('attemptResult').innerHTML = "Too High!"
        bloop.cloneNode(true).play();
    } else {
        win.cloneNode(true).play();

        document.getElementById('scoreCounter').innerHTML = "Score:"
        document.getElementById('attemptResult').innerHTML = "You Got It!"

        document.getElementById('guessbtn').disabled = true;
        let guessbtnWin = {
            "background": "rgb(90, 90, 90)",
            "border": "none",
            "cursor": "default"
        }
        let guessbtn = document.getElementById('guessbtn');
        Object.assign(guessbtn.style, guessbtnWin);

        let paBtnStyle = {
            "display": "inline",
            "cursor": "pointer",
            "opacity": "1"
        }
        let paBtn = document.getElementById('playAgainBtn');
        Object.assign(paBtn.style, paBtnStyle);
    }
    
}

function playAgain(){
    x = parseInt(Math.random()*101);
    // document.getElementById('demo').innerHTML = x;

    document.getElementById('mySlider').value = 50;
    document.getElementById('selectedNum').innerHTML = 50;
    document.getElementById('guessbtn').disabled = false;
    document.getElementById('score').innerHTML = 0;


    let guessbtnWin = {
        "background": "black",
        "cursor": "pointer"
    }
    let guessbtn = document.getElementById('guessbtn');
    Object.assign(guessbtn.style, guessbtnWin);
    

    

    let paBtnStyle = {
        "display": "none",
        "cursor": "default",
        "opacity": "0",
    }
    let paBtn = document.getElementById('playAgainBtn');
    Object.assign(paBtn.style, paBtnStyle);
}