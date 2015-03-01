//Global Variables
var theBoard;
var used;
var theCanvas;
var c;
var cxt;
var turn=0;
var blocked = 0;
var win = 0;
var two = 0;
var gameIsNotOver = true;
var draw = false;
var someoneWon = false;

//Instansiate Arrays
window.onload=function(){
	used = new Array();
	theBoard = new Array();
    
	for(var l = 0; l <= 8; l++){
	used[l] = false;
	theBoard[l]='';
	}
}

//Player moves
function canvasClicked(canvasNumber){
    theCanvas = "canvas"+canvasNumber;
	c = document.getElementById(theCanvas);
	cxt = c.getContext("2d");
    if(used[canvasNumber-1] == false){
        cxt.beginPath();
        cxt.moveTo(10,10);
        cxt.lineTo(40,40);
        cxt.moveTo(40,10);
        cxt.lineTo(10,40);
        cxt.stroke();
        cxt.closePath();
        theBoard[canvasNumber-1] = 'X';
        used[canvasNumber-1] = true;
        turn++;
        check();
        if (gameIsNotOver) computerMove();
       }else{
        alert("That space is occupied");
       }
}
	 

//computer move, moves to the next available space
function computerMove(){
    //First move, arbitrary placement
    if(turn == 1){
        for(var i=0;i<8;i++){
            if(used[i] == false){
                var num = i + 1;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                break;
            }   
        } 
        check();
    }
    
    //Second move
    if(turn == 2){
        block();
        if(blocked == 0){
            twoInARow();
            if(two == 0){
                for(var i=0;i<9;i++){
                    if(used[i] == false){
                        var num = i + 1;
                        theCanvas = "canvas"+num;
                        c = document.getElementById(theCanvas);
                        cxt = c.getContext("2d");
                        cxt.beginPath();
                        cxt.arc(25,25,20,0,Math.PI*2,true);
                        cxt.stroke();
                        cxt.closePath();
                        theBoard[i] = 'O';
                        used[i] = true;
                        break;
                    }   
                }
            }
        }
        check();
        blocked = 0;
        two = 0;
    }
    
    //Third turn
    if(turn == 3){
        tryToWin();
        if(win == 0){
            block();
            if(blocked == 0){
                for(var i=0;i<9;i++){
                    if(used[i] == false){
                        var num = i + 1;
                        theCanvas = "canvas"+num;
                        c = document.getElementById(theCanvas);
                        cxt = c.getContext("2d");
                        cxt.beginPath();
                        cxt.arc(25,25,20,0,Math.PI*2,true);
                        cxt.stroke();
                        cxt.closePath();
                        theBoard[i] = 'O';
                        used[i] = true;
                        break;
                    }   
                }
            }
        }
        check();
        blocked = 0;
        two = 0;
        win = 0;
    }
    
    //Fourth turn
    if(turn == 4){
        tryToWin();
        if(win == 0){
            block();
            if(blocked == 0){
                for(var i=0;i<9;i++){
                    if(used[i] == false){
                        var num = i + 1;
                        theCanvas = "canvas"+num;
                        c = document.getElementById(theCanvas);
                        cxt = c.getContext("2d");
                        cxt.beginPath();
                        cxt.arc(25,25,20,0,Math.PI*2,true);
                        cxt.stroke();
                        cxt.closePath();
                        theBoard[i] = 'O';
                        used[i] = true;
                        break;
                    }   
                }
            }
        }
        check();
        blocked = 0;
        two = 0;
        win = 0;
    }
    
}

//blocks player x from getting 3 in a row
function block(){
        //Blocking three in a row
        if(theBoard[0] == 'X' && theBoard[1] == 'X' && used[2]==false){
                var i = 2;
                var num = 3;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[0] == 'X' && theBoard[2] == 'X' && used[1]==false){
                var i = 1;
                var num = 2;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[3] == 'X' && theBoard[4] == 'X' && used[5]==false){
                var i = 5;
                var num = 6;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[3] == 'X' && theBoard[5] == 'X' && used[4]==false){
                var i = 4;
                var num = 5;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[4] == 'X' && theBoard[5] == 'X' && used[3]==false){
                var i = 3;
                var num = 4;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[6] == 'X' && theBoard[7] == 'X' && used[8]==false){
                var i = 8;
                var num = 9;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[6] == 'X' && theBoard[8] == 'X' && used[7]==false){
                var i = 7;
                var num = 8;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[7] == 'X' && theBoard[8] == 'X' && used[6]==false){
                var i = 6;
                var num = 7;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[0] == 'X' && theBoard[3] == 'X' && used[6]==false){
                var i = 6;
                var num = 7;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[0] == 'X' && theBoard[6] == 'X' && used[3]==false){
                var i = 3;
                var num = 4;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[1] == 'X' && theBoard[4] == 'X' && used[7]==false){
                var i = 7;
                var num = 8;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[1] == 'X' && theBoard[7] == 'X' && used[4]==false){
                var i = 4;
                var num = 5;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[7] == 'X' && theBoard[4] == 'X' && used[1]==false){
                var i = 1;
                var num = 2;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[2] == 'X' && theBoard[5] == 'X' && used[8]==false){
                var i = 8;
                var num = 9;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[2] == 'X' && theBoard[8] == 'X' && used[5]==false){
                var i = 5;
                var num = 6;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[8] == 'X' && theBoard[5] == 'X' && used[2]==false){
                var i = 2;
                var num = 3;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[0] == 'X' && theBoard[8] == 'X' && used[4]==false){
                var i = 4;
                var num = 5;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[0] == 'X' && theBoard[4] == 'X' && used[8]==false){
                var i = 8;
                var num = 9;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[4] == 'X' && theBoard[6] == 'X' && used[2]==false){
                var i = 2;
                var num = 3;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[2] == 'X' && theBoard[6] == 'X' && used[4]==false){
                var i = 4;
                var num = 5;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }else if(theBoard[2] == 'X' && theBoard[4] == 'X' && used[6]==false){
                var i = 6;
                var num = 7;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                blocked = 1;
        }             
}

//computer player O tries to win the game
function tryToWin(){
        //Get three in a row
        if(theBoard[0] == 'O' && theBoard[1] == 'O' && used[2]==false){
                var i = 2;
                var num = 3;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[0] == 'O' && theBoard[2] == 'O' && used[1]==false){
                var i = 1;
                var num = 2;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[3] == 'O' && theBoard[4] == 'O' && used[5]==false){
                var i = 5;
                var num = 6;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[3] == 'O' && theBoard[5] == 'O' && used[4]==false){
                var i = 4;
                var num = 5;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[4] == 'O' && theBoard[5] == 'O' && used[3]==false){
                var i = 3;
                var num = 4;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[6] == 'O' && theBoard[7] == 'O' && used[8]==false){
                var i = 8;
                var num = 9;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[6] == 'O' && theBoard[8] == 'O' && used[7]==false){
                var i = 7;
                var num = 8;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[7] == 'O' && theBoard[8] == 'O' && used[6]==false){
                var i = 6;
                var num = 7;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[0] == 'O' && theBoard[3] == 'O' && used[6]==false){
                var i = 6;
                var num = 7;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[0] == 'O' && theBoard[6] == 'O' && used[3]==false){
                var i = 3;
                var num = 4;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[1] == 'O' && theBoard[4] == 'O' && used[7]==false){
                var i = 7;
                var num = 8;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[1] == 'O' && theBoard[7] == 'O' && used[4]==false){
                var i = 4;
                var num = 5;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[7] == 'O' && theBoard[4] == 'O' && used[1]==false){
                var i = 1;
                var num = 2;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[2] == 'O' && theBoard[5] == 'O' && used[8]==false){
                var i = 8;
                var num = 9;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[2] == 'O' && theBoard[8] == 'O' && used[5]==false){
                var i = 5;
                var num = 6;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[8] == 'O' && theBoard[5] == 'O' && used[2]==false){
                var i = 2;
                var num = 3;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[0] == 'O' && theBoard[8] == 'O' && used[4]==false){
                var i = 4;
                var num = 5;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[0] == 'O' && theBoard[4] == 'O' && used[8]==false){
                var i = 8;
                var num = 9;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[4] == 'O' && theBoard[6] == 'O' && used[2]==false){
                var i = 2;
                var num = 3;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[2] == 'O' && theBoard[6] == 'O' && used[4]==false){
                var i = 4;
                var num = 5;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }else if(theBoard[2] == 'O' && theBoard[4] == 'O' && used[6]==false){
                var i = 6;
                var num = 7;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                win = 1;
        }             
}

//computer player tries to get two in a row
function twoInARow(){
        if(theBoard[0] == 'O' && used[1] == false && used[2]==false){
                var i = 1;
                var num = 2;
                theCanvas = "canvas"+num;
                c = document.getElementById(theCanvas);
                cxt = c.getContext("2d");
                cxt.beginPath();
                cxt.arc(25,25,20,0,Math.PI*2,true);
                cxt.stroke();
                cxt.closePath();
                theBoard[i] = 'O';
                used[i] = true;
                two = 1;
        }
}

//Checks to see if there is a winner and declares a draw if all boxes are filled
function check(){
    
    //Check if X is the winner
        if(theBoard[0] == 'X' && theBoard[1] == 'X' && theBoard[2] == 'X'){
            clearBoard("X");
        }else if(theBoard[3] == 'X' && theBoard[4] == 'X' && theBoard[5] == 'X'){
            clearBoard("X");
        }else if(theBoard[6] == 'X' && theBoard[7] == 'X' && theBoard[8] == 'X'){
            clearBoard("X");
        }else if(theBoard[0] == 'X' && theBoard[3] == 'X' && theBoard[6] == 'X'){
            clearBoard("X");
        }else if(theBoard[1] == 'X' && theBoard[4] == 'X' && theBoard[7] == 'X'){
            clearBoard("X");
        }else if(theBoard[2] == 'X' && theBoard[5] == 'X' && theBoard[8] == 'X'){
            clearBoard("X");
        }else if(theBoard[0] == 'X' && theBoard[4] == 'X' && theBoard[8] == 'X'){
            clearBoard("X");
        }else if(theBoard[2] == 'X' && theBoard[4] == 'X' && theBoard[6] == 'X'){
            clearBoard("X");
        }
    
    //Check is O is the winner
        if(theBoard[0] == 'O' && theBoard[1] == 'O' && theBoard[2] == 'O'){
            clearBoard("O");
        }else if(theBoard[3] == 'O' && theBoard[4] == 'O' && theBoard[5] == 'O'){
            clearBoard("O");
        }else if(theBoard[6] == 'O' && theBoard[7] == 'O' && theBoard[8] == 'O'){
            clearBoard("O");
        }else if(theBoard[0] == 'O' && theBoard[3] == 'O' && theBoard[6] == 'O'){
            clearBoard("O");
        }else if(theBoard[1] == 'O' && theBoard[4] == 'O' && theBoard[7] == 'O'){
            clearBoard("O");
        }else if(theBoard[2] == 'O' && theBoard[5] == 'O' && theBoard[8] == 'O'){
            clearBoard("O");
        }else if(theBoard[0] == 'O' && theBoard[4] == 'O' && theBoard[8] == 'O'){
            clearBoard("O");
        }else if(theBoard[2] == 'O' && theBoard[4] == 'O' && theBoard[6] == 'O'){
            clearBoard("O");
        }
    
    //draw
    for(var k=0; k<9;k++){
        if(used[k]==true){
            draw = true;   
        }else{
            draw = false;
            break;
        }
    }
    
    if(draw && !someoneWon){
     clearBoard("It's a draw, no one");
    }
}

//resets game board
function clearBoard(winner){
    var comment = winner + " wins";
    var newParagraph = document.createElement('p');
    newParagraph.textContent = comment;
    document.getElementById("updateDiv").appendChild(newParagraph);
    someoneWon = true;
    var btn = document.createElement("BUTTON");        
    var t = document.createTextNode("RESET"); 
    btn.onclick = function(){location.reload(true)};
    btn.appendChild(t);                                
    document.body.appendChild(btn);
    gameIsNotOver = false;
}
