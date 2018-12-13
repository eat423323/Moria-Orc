// why can't I use $(document).ready instead of window.onload?
//window.onload = ()=>{
$(document).ready(()=>{
  /*
  const bridge = 'http://140.117.169.45:8088/bridge.jpg';
  const staircase = 'http://140.117.169.45:8088/staircase.jpg';
  const orc = 'http://140.117.169.45:8088/orc.jpg';
  const gate = "http://140.117.169.45:8088/gate.png";
  */
  const ip ="http://172.24.30.78:8088/";
  const bridge = ip+'bridge.jpg';
  const staircase = ip+'staircase.jpg';
  const orc = ip+"orc.jpg";
  const gate = ip+"gate.png";

  let door1 = document.getElementById('door1');
  let door2 = document.getElementById('door2');
  let door3 = document.getElementById('door3');
  let startButton = document.getElementById('startButton');
  let longestStreak = document.getElementById('longest-streak');
  let longNum = 0;
  let currentStreak = document.getElementById('current-streak');
  let currentNum = 0;
  let serveDoor1;
  let serveDoor2;
  let serveDoor3;
  let stillPlaying = true;
  let numClosedDoors = 3;
  let result;

  function runCheck(door){
    numClosedDoors--;
    if (numClosedDoors === 0){
      gameOver('win');
    } else if (isOrc(door)) {
      gameOver();
    };
  };

  function gameOver(status){
    if (status === "win"){
      startButton.innerHTML = 'You win! Play again?'
      if ( currentNum >= longNum){
        longNum++;
        longestStreak.innerHTML = longNum;
      };
      currentNum++;
      currentStreak.innerHTML = currentNum;
      result = 'win';
    } else {
      startButton.innerHTML = 'Game over. Play again?';
      result = 'lose';
    };
    stillPlaying = false;
  }

  function isOrc(door){
    console.log("qq: "+door.src);
    console.log("qq2: "+orc);
    if (String(door.src) === orc) {
      return true;
    } else {
      return false;
    }
  }

  function notClicked(door){
    console.log("door "+door.src);
    //console.log("gate "+gate);
    if ( door.src === gate ) {
      return true;
    } else {
      return false;
    }
  }

  function randomDoorGenerator(){
    let randomPic = Math.floor(Math.random() * 3);
    if ( randomPic === 0 ){
        serveDoor1 = bridge;
        serveDoor2 = staircase;
        serveDoor3 = orc;
      } else if ( randomPic === 1 ){
        serveDoor3 = bridge;
        serveDoor = staircase;
        serveDoor2 = orc;
      } else if ( randomPic === 2 ) {
        serveDoor2 = bridge;
        serveDoor3 = staircase;
        serveDoor1 = orc;
      };
    }
//why can I use door1 indstead of door1?
  door1.onclick = function(){
    //console.log(4);
    console.log('door ' + door1.src);
    if ( notClicked(door1) && stillPlaying ) {
      console.log('door ' + door1.src);
      door1.src = serveDoor1;
      runCheck(door1);
    }
  }

  door2.onclick = function(){
    if ( notClicked(door2) && stillPlaying ) {
      door2.src = serveDoor2;
      runCheck(door2);
    }
  }

  door3.onclick = function(){
    if ( notClicked(door3) && stillPlaying ) {
      door3.src = serveDoor3;
      runCheck(door3);
    }
  }

  startButton.onclick = function(){
    if (result === 'win'){
      restart();
    } else if ( stillPlaying === false ){
      restart();
      currentNum = 0;
      currentStreak.innerHTML = currentNum;
    }
  }

  function restart(){
    numClosedDoors = 3;
    door1.src = gate;
    door2.src = gate;
    door3.src = gate;
    startButton.innerHTML = 'Good Luck!'
    stillPlaying = true;
    randomDoorGenerator();
  }

  restart();
})



/*
window.onload = ()=>{
  $('#door1').on('click', function(){
    console.log(1);
  })
}
*/
