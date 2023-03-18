 //  invokes the method start() of the myGameArea object.
 // The start() method creates a <canvas> element and inserts it as the first childnode of the <body> element.
 var myGamePiece;

 function startGame() {
  // Run Game
       // Player image
       myGamePiece = new component(30, 30, "red", 10, 120);
     myGameArea.start();
    }
 // Canvas game area
 var myGameArea = {
     canvas : document.createElement("canvas"),
     start : function() {
         this.canvas.width = 480;
         this.canvas.height = 270;
         this.context = this.canvas.getContext("2d");
         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
         // Update the updateGameArea() function every 20th millisecond 
         this.interval = setInterval(updateGameArea, 20);
        },
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);    
     }
 }
 // Player image component constructor
 function component(width, height, color, x, y) {
     this.width = width;
     this.height = height;
     this.speedX = 0;
     this.speedY = 0;
     this.x = x;
     this.y = y;    
     this.update = function(){
     ctx = myGameArea.context;
     ctx.fillStyle = color;
     ctx.fillRect(this.x, this.y, this.width, this.height);
     }   
     this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    } 
}
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function moveup() {
    myGamePiece.speedY -= 1; 
}

function movedown() {
    myGamePiece.speedY += 1; 
}

function moveleft() {
    myGamePiece.speedX -= 1; 
}

function moveright() {
    myGamePiece.speedX += 1; 
}