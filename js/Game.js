class Game {
  constructor() {

  }

  /* getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  } */

  update(state) {

    gameState = state

  }

  async start() {
    if (gameState === 0) {
      player = new Player();

      form = new Form()
      form.display();
    }


  }

  play() {
    form.hide();

   // background(141,144,164)

   // if (allPlayers !== undefined) {
      background(rgb(141,144,164));
    //  image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

      //rect1 = createSprite(200, 170, 50, 80);
     // rect2 = createSprite(320, 70, 50, 80);
     // rect3 = createSprite(450, 270, 50, 80);
      //rect4 = createSprite(370, 180, 50, 80);
     // rect5 = createSprite(600, 200, 50, 80);
     // rect6 = createSprite(600, 200, 50, 80);
      

     var cardboardnumber1 = createSprite(10,70,100,20);
     var cardboardnumber2 = createSprite(110,30,20,100);
     var cardboardnumber3 = createSprite(180,27,100,20);
     var cardboardnumber4 = createSprite(80,120,100,20);
     var cardboardnumber5 = createSprite(167,120,20,100);
     var cardboardnumber6 = createSprite(150,216,100,20);
     var cardboardnumber7 = createSprite(2,212,100,20);
     var cardboardnumber8 = createSprite(80,210,20,100);
     var cardboardnumber9 = createSprite(33,313,20,100);
     var cardboardnumber10 = createSprite(120,305,20,100);
     var cardboardnumber11 = createSprite(260,392,100,20);
     var cardboardnumber12 = createSprite(190,373,20,100);
     var cardboardnumber13 = createSprite(199,313,100,20);
     var cardboardnumber14 = createSprite(250,267,20,112);
     var cardboardnumber15 = createSprite(344,211,110,20);
     var cardboardnumber16 = createSprite(364,272,110,20);
     var cardboardnumber17 = createSprite(302,295,20,100);
     var cardboardnumber18 = createSprite(343,393,20,110);
     var cardboardnumber19 = createSprite(348,125,20,100);
     var cardboardnumber20 = createSprite(273,150,100,20);
     var cardboardnumber21 = createSprite(260,70,20,100);
     var cardboardnumber22 = createSprite(340,50,100,20);
      //var display_position = 100;

      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        // console.log(index, player.index)


        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
        }

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

  //  }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 10
      player.update();
    }

    if (player.distance > 3860) {
      gameState = 2;
      player.rank += 1;
      Player.updateCarsatEnd(player.rank)
    }

    drawSprites();
  }

  end() {
    console.log("Game Ended");
    console.log(player.rank);
  }
}
