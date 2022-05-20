class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    PlayerCount = player.getCount();
    car1 = createSprite(width/2-50, height-100);
    car2 = createSprite(width/2+100, height-100);
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
      image(backgroundImage,0,-height*5,width,height*5);
  
    var index = 0;
    for(var plr in allPlayers){
      index = index + 1;
      var x = allPlayers[plr].positionX;
      var y = height - allPlayers[plr].positionY;

      cars[index-1].position.x = x;
      cars[index-1].position.y = y;

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
