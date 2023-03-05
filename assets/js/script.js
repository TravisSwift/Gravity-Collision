 function startGame() {
  myGameArea.start();
 }

 var myGameArea = {
  canvas : document.createElement("canvas"),
  stat : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childnodes[0]);
  }

 }