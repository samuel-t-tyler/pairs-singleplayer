let p1StopWatchTime = document.getElementById("p1stopwatchtime")
let p2StopWatchTime = document.getElementById("p2stopwatchtime")
let varr1c1 = document.getElementById("r1c1")
let varr1c2 = document.getElementById("r1c2")
let varr1c3 = document.getElementById("r1c3")
let varr2c1 = document.getElementById("r2c1")
let varr2c2 = document.getElementById("r2c2")
let varr2c3 = document.getElementById("r2c3")
let varr3c1 = document.getElementById("r3c1")
let varr3c2 = document.getElementById("r3c2")
let varr3c3 = document.getElementById("r3c3")
let varr4c1 = document.getElementById("r4c1")
let varr4c2 = document.getElementById("r4c2")
let varr4c3 = document.getElementById("r4c3")
let titleButton = document.getElementById("titlebutton")
const tileBackground = "./resources/images/blue castle.jpg"
const flipPic1 = "./resources/images/bug.jpg"
const flipPic2 = "./resources/images/eye.jpg"
const flipPic3 = "./resources/images/frog.jpg"
const flipPic4 = "./resources/images/robot.jpg"
const flipPic5 = "./resources/images/redcow.jpg"
const flipPic6 = "./resources/images/turtle.jpg"
let clickEnabeled = true
let currentTimeMilli = 0
let bestTimeMilli = "9 : 99 . 99"
//global variables
//faceup cards


let shuffleArray = _.shuffle([1,2,3,4,5,6,7,8,9,10,11,12])
let tilearray = [varr1c1, varr1c2, varr1c3, varr2c1, varr2c2, varr2c3, varr3c1, varr3c2, varr3c3, varr4c1, varr4c2, varr4c3]
let fliparray = [flipPic1, flipPic1, flipPic2, flipPic2, flipPic3, flipPic3, flipPic4, flipPic4, flipPic5, flipPic5, flipPic6, flipPic6]
let masterList = []
let whichTile = 0
let savedTile1Id;
let savedTile2Id;
let whoseTurn = 0
let gameOver = false;
let sameButtonTwice = false;
let successfulFlips = 0
let firstClick = false;

//setup functions

function Stopwatch(elem) {
    var time = 0;
    var offset;
    var interval;
  
    function update() {
      if (this.isOn) {
        time += delta();
      }
      
      elem.textContent = timeFormatter(time);
    }
  
    function delta() {
      var now = Date.now();
      var timePassed = now - offset;
  
      offset = now;
  
      return timePassed;
    }
  
    function timeFormatter(time) {
      time = new Date(time);
  
      var minutes = time.getMinutes().toString();
      var seconds = time.getSeconds().toString();
      var milliseconds = time.getMilliseconds().toString();
  
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
  
      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }
  
      while (milliseconds.length < 3) {
        milliseconds = '0' + milliseconds;
      }
      this.milliseconds = milliseconds
      return minutes[0] + ' : ' + seconds + ' . ' + milliseconds[0] + milliseconds[1];
    }
    this.milliseconds = 0 
    this.start = function() {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    };
  
    this.stop = function() {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    };
  
    this.reset = function() {
      time = 0;
      update();
    };
  
    this.isOn = false;
  }

// startup functions
function mergeLists(numArr, tileArr) {
    for (i=0; i< tileArr.length; i++) {
        masterList.push([tilearray[i], shuffleArray[i], false])
    }
}

//body functions
function tileClicked(event) {
    if (firstClick === false) {
        currentTime.start()
        firstClick = true
    }
        if (clickEnabeled === true) {
            if (gameOver === false) {
                titleButton.innerHTML = "Pairs"
                titleButton.style.color = "#b8f2e6"
                whichTile++
                if (whichTile % 2 === 1) {
                    for (i=0; i< masterList.length; i++) {
                        if (masterList[i][0] === event.target) {
                            savedTile1Id = i
                            if (masterList[savedTile1Id][2] === false) {
                                masterList[savedTile1Id][2] = true
                                if (masterList[i][1] === 1 || masterList[i][1] === 2) {
                                    event.target.src = flipPic1
                                }
                                if (masterList[i][1] === 3 || masterList[i][1] === 4) {
                                    event.target.src = flipPic2
                                }
                                if (masterList[i][1] === 5 || masterList[i][1] === 6) {
                                    event.target.src = flipPic3
                                }
                                if (masterList[i][1] === 7 || masterList[i][1] === 8) {
                                    event.target.src = flipPic4
                                }
                                if (masterList[i][1] === 9 || masterList[i][1] === 10) {
                                    event.target.src = flipPic5
                                }
                                if (masterList[i][1] === 11 || masterList[i][1] === 12) {
                                    event.target.src = flipPic6
                                }
                            } else {
                                console.log("whoops, you clicked the same card twice")
                                whichTile--
                            }
                        }
                    }
                }
                else {
                    whoseTurn++
                    console.log("is is turn " + whoseTurn)
                        for (i=0; i< masterList.length; i++) {
                            if (masterList[i][0] === event.target) {
                                savedTile2Id = i
                                if (masterList[savedTile2Id][2] === false) {
                                    masterList[savedTile2Id][2] = true
                                    if (masterList[i][1] === 1 || masterList[i][1] === 2) {
                                        event.target.src = flipPic1
                                    }
                                    if (masterList[i][1] === 3 || masterList[i][1] === 4) {
                                        event.target.src = flipPic2
                                    }
                                    if (masterList[i][1] === 5 || masterList[i][1] === 6) {
                                        event.target.src = flipPic3
                                    }
                                    if (masterList[i][1] === 7 || masterList[i][1] === 8) {
                                        event.target.src = flipPic4
                                    }
                                    if (masterList[i][1] === 9 || masterList[i][1] === 10) {
                                        event.target.src = flipPic5
                                    }
                                    if (masterList[i][1] === 11 || masterList[i][1] === 12) {
                                        event.target.src = flipPic6
                                    }
                                } else {
                                    console.log("whoops, you clicked the same card twice")
                                    whichTile--
                                    whoseTurn--
                                }
                            }
                        }
                        if (whichTile % 2 === 0) {
                            if (masterList[savedTile2Id][1] % 2 === 0) {
                                if (masterList[savedTile2Id][1] === masterList[savedTile1Id][1] + 1) {
                                    success(event)
                                }
                                else {
                                    clickEnabeled = false;
                                    console.log("clicks disabled ")
                                    setTimeout(failure, 800)
                                }
                            } else if (masterList[savedTile2Id][2] === true) {
                                if (masterList[savedTile2Id][1] === masterList[savedTile1Id][1] - 1) {
                                    success(event)
                                }
                                else {
                                    clickEnabeled = false;
                                    console.log("clicks disabled ")
                                    setTimeout(failure, 800)
                                }
                            }
                        }
                    }   
                }
        }
}

function success() {
    console.log("Match!")
    successfulFlips++
    console.log(successfulFlips)
    if (masterList[savedTile2Id][1] === 5 || masterList[savedTile2Id][1] === 6) {
        titleButton.style.color = "#ff8446"
        titleButton.innerHTML = "Nice Frog!"
        } else {
        titleButton.innerHTML = "Nice Job!"
        }
    if (successfulFlips === 6) {
        console.log("innitating game over")
        gameOver = true
        gameOverFunction()
    }
}

function failure(event) {
    masterList[savedTile2Id][2] = false
    masterList[savedTile1Id][2] = false
    tilearray[savedTile1Id].src = tileBackground
    tilearray[savedTile2Id].src = tileBackground
    clickEnabeled = true
}


function eventAssignment(arr) {
    arr.onclick = () => {
        tileClicked(event)
    }
}

function gameOverFunction() {
    titleButton.innerHTML = "Pairs"
    currentTime.stop()
    currentTimeMilli = p1StopWatchTime.innerHTML
    ifBetterTime(currentTimeMilli, bestTimeMilli)
        gameOver = true
        titleButton.innerHTML = "Play Again?"
        titleButton.style.color = "#ff8446"
        titleButton.style.cursor = "pointer"
}

titleButton.onclick = () => {
    if (gameOver === true) {
        currentTime.reset()
        gameOver = false;
        firstClick = false;
        successfulFlips = 0
        for (i=0; i< tilearray.length; i++) {
            tilearray[i].src = tileBackground
        }
        masterList = []
        shuffleArray = _.shuffle([1,2,3,4,5,6,7,8,9,10,11,12])
        mergeLists(shuffleArray, tilearray)
        whichTile = 0;
        savedTile1Id = 0;
        savedTile2Id = 0;
        whoseTurn = 0;
        titleButton.innerHTML = "Pairs";
        titleButton.style.color = "#b8f2e6";
    }
}

function ifBetterTime(curvar, bestvar) {
    let currentminutes = parseInt(curvar[0])
    let currenttenseconds = parseInt(curvar[4])
    let currentseconds = parseInt(curvar[5])
    let currenttenmilliseconds = parseInt(curvar[9]) 
    let currentmilliseconds = parseInt(curvar[10]) 

    let bestminutes = parseInt(bestvar[0])
    let besttenseconds = parseInt(bestvar[4])
    let bestseconds = parseInt(bestvar[5])
    let besttenmilliseconds = parseInt(bestvar[9]) 
    let bestmilliseconds = parseInt(bestvar[10]) 

    if (currentminutes < bestminutes || currentminutes === bestminutes && currenttenseconds < besttenseconds || currentminutes === bestminutes && currenttenseconds === besttenseconds && currentseconds < bestseconds || currentminutes === bestminutes && currenttenseconds === besttenseconds && currentseconds === bestseconds && currenttenmilliseconds < besttenmilliseconds || currentminutes === bestminutes && currenttenseconds === besttenseconds && currentseconds === bestseconds && currenttenmilliseconds === besttenmilliseconds && currentmilliseconds < bestmilliseconds) {
        let newbest = curvar[0] + " : " + curvar[4] + curvar[5] + " . " + curvar[9] +  curvar[10]
        bestTimeMilli = newbest
        p2StopWatchTime.innerHTML = newbest
    }
}


// Called before start 
mergeLists(shuffleArray, tilearray)
tilearray.forEach(eventAssignment)

currentTime = new Stopwatch(p1StopWatchTime)

