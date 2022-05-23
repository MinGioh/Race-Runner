class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    PlayerCount = player.getCount();
    car1 = createSprite(width/2-50, height-100);
     car1.addImage(car1Img);
      car1.scale = 0.07;
    car2 = createSprite(width/2+100, height-100);
     car2.addImage(car2Img);
      car2.scale = 0.07;
    cars = [car1, car2];
  }

  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play(){
    this.handleElements();
    Player.getPlayersInfo();
    
    if(allPlayers!=undefined){
      image(pista,0,-height*5,width,height*5);
  
    var index = 0;
    for(var plr in allPlayers){
      index = index + 1;
      var x = allPlayers[plr].positionX;
      var y = height - allPlayers[plr].positionY;

      cars[index-1].position.x = x;
      cars[index-1].position.y = y;
      if(index==player.index){
        fill("red");
        ellipse(x,y,60);
        camera.position.x = cars[index-1].position.x;
        camera.position.y = cars[index-1].position.y;
      }
     
    }

     //chamada da função de controle do player
     this.handlePlayerControls();

    drawSprites();
    }
  }

  handlePlayerControls(){
    if(keyIsDown(UP_ARROW)){
      player.positionY += 10;
      player.update();
    }
  }

  getState(){
    var gameStateRef = database.ref("GameState");
    gameStateRef.on("value", function(data){
      GameState = data.val();
    });
  }

 update(state)
 {
  database.ref("/").update({
    GameState: state,
  });
 }




}
